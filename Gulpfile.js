require("babel/register");

var gulp = require("gulp");

var mocha = require('gulp-mocha');

// gulp.task("build", function() {
//     return gulp.src('src/**/*.js')
//         .pipe(babel())
//         .pipe(gulp.dest('dist'));
// })

gulp.task("test", function() {
    return gulp.src('test.js', { read: false })
        .pipe(mocha({
            reporter: 'list'
        }));
})