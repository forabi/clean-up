var expect = require("expect.js"),
	humanize = require("string-humanize"),
	fs = require("fs");

var cleanUp = require("./src/index");

var dirs = fs.readdirSync(`${__dirname}/tests`).map(dir => `${__dirname}/tests/${dir}`);

dirs.forEach(function(dir, n) {
	var input = String(fs.readFileSync(`${dir}/input.txt`)),
		output = String(fs.readFileSync(`${dir}/output.txt`)),
		rules = String(fs.readFileSync(`${dir}/rules.txt`)).split("\n");

	var clean = cleanUp(rules);

	describe(`Test ${n + 1}`, function() {
		it(`should ${humanize(rules.join(", ")).toLowerCase()}`, function() {
			expect(clean(input)).to.be(output);
		})
	})
})
