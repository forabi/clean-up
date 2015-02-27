import * as unicode from "unicode.js";

const new_line = /[\n\r]/gi;
      whitespace = "[\u00A0\s]",
      dulpicate_whitespace = `${whitespace}{2,}`,
      punctuation = "[؟!،:؛]",
      duplicate_punctuation = "(\?){2,}|(!){2,}|(،){2,}|(:){2,}|(؛){2,}|(\?!){2,}"
      opening_bracket = "[({\[]",
      closing_bracket = "[)}\]]",
      unit = "[$%٪؉؊]",
      latin_comma = ","
      latin_semicolon = ";",
      comma = "،",
      semicolon = "؛",
      arabic = "[\u0600-\u06FF]",
      non_digit = "[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]"
      digit = "[\u0660-\u0669\u06F0-\u06F9]",
      letter = "[اآأبتثجحخدذرزسشصضعغفقكلمنهويءئ]",
      decimal_separator = "٫"
      kashida = "ـ";

var replaces = {
    empty_line: [new RegExp(`^(${whitespace}+)?$`, "gm"), ""],
    trailing_whitespace: [new RegExp(`${whitespace}+$`, "g"), ""],
    heading_whitespace: [new RegExp(`^${whitespace}+$`, "g"), ""],
    dulpicate_whitespace: [new RegExp(dulpicate_whitespace, "g"), ""],
    whitespace_before_punctuation: [new RegExp(`${whitespace}(?=${punctuation})`, "g"), ""],
    whitespace_around_brackets: [new RegExp(`(?:(${whitespace})(?=${closing_bracket}))|(?:${opening_bracket}(${whitespace}))`, "g"), ],
    kashida_inside_words: [new RegExp(`(${arabic})${kashida}+(${arabic})`, "g"), "$1$2"],
    trailing_kashida: [new RegExp(`${kashida}+(?=${whitespace}|^${arabic})`, "g"), `${kashida}${unicode.ZWNJ}`],
    latin_comma: [new RegExp(`(${arabic}|${whitespace})(${latin_comma})(?=${arabic}|${whitespace})`, "g"), `$1${comma}`],
    latin_semicolon: [new RegExp(`(${arabic}|${whitespace})(${latin_semicolon})(?=${arabic}|${whitespace})`, "g"), `$1${semicolon}`],
    latin_comma_as_decimal_separator: [new RegExp(`(${digit})(${latin_semicolon})(?=${digit})`, "g"), `$1${decimal_separator}`],
    duplicate_punctuation: [new RegExp(`${duplicate_punctuation}`, "g"), "$1"],
    whitespace_after_single_waw: [new RegExp(`${whitespace}و${whitespace}`), "و"]
};

var rules = [
    "empty_line",
    "trailing_whitespace",
    "heading_whitespace",
    "dulpicate_whitespace",
    "whitespace_before_punctuation",
    "whitespace_around_brackets",
    "whitespace_after_single_waw",
    "kashida_inside_words",
    "trailing_kashida",
    "latin_comma",
    "latin_semicolon",
    "latin_comma_as_decimal_separator",
    "duplicate_punctuation"
];

function clean_up(str) {
    rules.forEach(function(name) {
        var rule = replaces[name];
        str = str.replace(rule[0], rule[1]);
    });
    return str;
}

export { clean_up };