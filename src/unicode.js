// var HYPHEN = "\u2010",
//   NON_BREAKING_HYPHEN = "\u2011",
//   EM_DASH = ,
//   ,
//   QUOTATION_DASH = "\u2015",
//   OPENING_SINGLE_QUOTATION_MARKS = ['‘'],
//   OPENING_DOUBLE_QUOTATION_MARKS = ['“', '„', '”'],
//   NBRS = " " /* Non-breaking space */,
//   DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//           "½", "⅓", "⅔", "¼", "¾", "⅕", "⅖", "⅗", "⅘", "⅙",
//           "⅚", "⅛", "⅜", "⅝", "⅞", "⅐", "⅑", "⅒"],
//   ZWNJ = "\u200c",
//   ZWS = "\u200b",
//   LRM = "\u200e",
//   RLM = "\u200f",
//   LEFTWARDS_ARROW = "←",
//   LEFTWARDS_DOUBLE_ARROW = "⇐",
//   RIGHTWARDS_ARROW = "→",
//   RIGHTWARDS_DOUBLE_ARROW = "⇒";
export var unicode = {
    ZWJ: "\u200d",
    ZWNJ: "\u200c",
    ELLIPSIS: "…",
    HAIR_SPACE: "\u200a",
    EM_DASH: "\u2014",
    EN_DASH: "\u2013",
    RIGHT_DOUBLE_QUOTATION_MARK: "\u201d",
    LEFT_DOUBLE_QUOTATION_MARK: "\u201c"
};

// var ANY_DIGIT = "[" + DIGITS.join() + "]";

// var THREE_DOTS = /\.{3}(?=$|\s)/gi,
//     FAKE_LEFTWARDS_ARROW = /<\-{2}/gi,
//     FAKE_RIGHTWARDS_ARROW = /\-{2}>/gi,
//     MULTIPLE_SPACES = /[\s ]+/gi, // A whitespace or a non-breaking space
//     DIGIT_HYPHEN = new RegExp("(?<=" + ANY_DIGIT + ")\-(?=" + ANY_DIGIT + ")", "gi");
