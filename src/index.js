import { unicode } from "./unicode.js";

const new_line = "[\\n\\r]",
      whitespace = "[\u00A0\\s]",
      dulpicate_whitespace = `${whitespace}{2,}`,
      punctuation = "[؟!،:؛.]",
      duplicate_punctuation = "(؟){2,}|(!){2,}|(،){2,}|(:){2,}|(؛){2,}|(؟!){2,}|(!؟){2,}",
      opening_bracket = "[({\[]",
      closing_bracket = "[)}\]]",
      unit = "[$%٪؉؊]",
      latin_comma = ",",
      latin_semicolon = ";",
      comma = "،",
      semicolon = "؛",
      arabic = "[\u0600-\u06FF]",
      non_digit = "[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]",
      digit = "[\u0660-\u0669\u06F0-\u06F9]",
      letter = "[اآأبتثجحخدذرزسشصضعغفقكلمنهويءئ]",
      decimal_separator = "٫",
      dulpicate_periods = "\\.{2,}",
      kashida = "ـ";

var replaces = {
    remove_empty_lines: [new RegExp(`\\n({whitespace}+)?\\n?`, "gm"), "\n"],
    remove_railing_whitespace: [new RegExp(`${whitespace}+$`, "g"), ""],
    remove_heading_whitespace: [new RegExp(`^${whitespace}+$`, "g"), ""],
    remove_dulpicate_whitespace: [new RegExp(dulpicate_whitespace, "g"), ""],
    remove_whitespace_before_punctuation: [new RegExp(`${whitespace}(?=${punctuation})`, "g"), ""],
    remove_whitespace_around_brackets: [new RegExp(`(?:(${whitespace})(?=${closing_bracket}))|(?:${opening_bracket}(${whitespace}))`, "g"), ],
    remove_kashida_inside_words: [new RegExp(`(${arabic})${kashida}+(${arabic})`, "g"), "$1$2"],
    remove_trailing_kashida: [new RegExp(`${kashida}+(?=${whitespace}|^${arabic})`, "g"), `${kashida}${unicode.ZWNJ}`],
    fix_latin_comma: [new RegExp(`(${arabic}|${whitespace})(${latin_comma})(?=${arabic}|${whitespace})`, "g"), `$1${comma}`],
    fix_latin_semicolon: [new RegExp(`(${arabic}|${whitespace})(${latin_semicolon})(?=${arabic}|${whitespace})`, "g"), `$1${semicolon}`],
    fix_latin_comma_as_decimal_separator: [new RegExp(`(${digit})(${latin_semicolon})(?=${digit})`, "g"), `$1${decimal_separator}`],
    remove_duplicate_punctuation: [new RegExp(`${duplicate_punctuation}`, "g"), "$1"],
    remove_whitespace_after_single_waw: [new RegExp(`${whitespace}و${whitespace}`, "g"), " و"],
    fix_periods_as_ellipsis: [new RegExp(dulpicate_periods, "g"), unicode.ELLIPSIS]
};

var rules = [
    "remove_empty_lines",
    "remove_trailing_whitespace",
    "remove_heading_whitespace",
    "remove_dulpicate_whitespace",
    "remove_whitespace_before_punctuation",
    "remove_whitespace_around_brackets",
    "remove_whitespace_after_single_waw",
    "remove_kashida_inside_words",
    "remove_trailing_kashida",
    "fix_latin_comma",
    "lfix_atin_semicolon",
    "fix_latin_comma_as_decimal_separator",
    "remove_duplicate_punctuation",
    "fix_periods_as_ellipsis"
];

function cleanUp(rules) {
  return function clean(str) {
      rules.forEach(function(name) {
          console.log(`Rule name is ${name}`);
          var rule = replaces[name];
          console.log("Rule", rule);
          var regex = rule[0];
          console.log("Matches?", str.match(regex));
          str = str.replace(rule[0], rule[1]);
      });
      return str;
  }
}
export default cleanUp;