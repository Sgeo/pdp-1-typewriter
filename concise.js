
export const BLACK = Symbol("BLACK");
export const RED   = Symbol("RED");

export const LOWER = Symbol("LOWER");
export const UPPER = Symbol("UPPER");




// Stateful due to upper/lower
export class Translator {
    constructor() {
        this._case = LOWER;
    }

    // Given a PDP-1 concise code, returns a string, or BLACK or RED to change ribbon colors.
    stringFromConcise(concise) {
        let result = stringFromConciseTable(this._case)[concise];
        if(!result) {
            return "\uFFFD";
        } else if(result === LOWER) {
            this._case = LOWER;
            return "";
        } else if(result === UPPER) {
            this._case = UPPER;
            return "";
        } else {
            return result
        }
    }

}

function stringFromConciseTable(case_) {
    return {
        [LOWER]: conciseLower,
        [UPPER]: conciseUpper
    }[case_]
}

const conciseUpper = [];
conciseUpper[0o00] = " ";
conciseUpper[0o01] = "\"";
conciseUpper[0o02] = "'";
conciseUpper[0o03] = "~";
conciseUpper[0o04] = "\u{2283}"; // ⊃, supposed to be implies(?)
conciseUpper[0o05] = "\u{2228}"; // ∨ logical OR
conciseUpper[0o06] = "\u{2227}"; // ∧ logical AND
conciseUpper[0o07] = "<";
conciseUpper[0o10] = ">";
conciseUpper[0o11] = "\u{2191}"; // ↑
conciseUpper[0o20] = "\u{2192}"; // →
conciseUpper[0o21] = "?";
conciseUpper[0o22] = "S";
conciseUpper[0o23] = "T";
conciseUpper[0o24] = "U";
conciseUpper[0o25] = "V";
conciseUpper[0o26] = "W";
conciseUpper[0o27] = "X";
conciseUpper[0o30] = "Y";
conciseUpper[0o31] = "Z";
conciseUpper[0o33] = "=";
conciseUpper[0o34] = BLACK;
conciseUpper[0o35] = RED;
conciseUpper[0o36] = "\t";
conciseUpper[0o40] = "_\b"; // _ non-spacing
conciseUpper[0o41] = "J";
conciseUpper[0o42] = "K";
conciseUpper[0o43] = "L";
conciseUpper[0o44] = "M";
conciseUpper[0o45] = "N";
conciseUpper[0o46] = "O";
conciseUpper[0o47] = "P";
conciseUpper[0o50] = "Q";
conciseUpper[0o51] = "R";
conciseUpper[0o54] = "+";
conciseUpper[0o55] = "]";
conciseUpper[0o56] = "|\b"; // | non-spacing
conciseUpper[0o57] = "[";
conciseUpper[0o61] = "A";
conciseUpper[0o62] = "B";
conciseUpper[0o63] = "C";
conciseUpper[0o64] = "D";
conciseUpper[0o65] = "E";
conciseUpper[0o66] = "F";
conciseUpper[0o67] = "G";
conciseUpper[0o70] = "H";
conciseUpper[0o71] = "I";
conciseUpper[0o72] = LOWER;
conciseUpper[0o73] = "\u{00D7}"; // × multiplication sign
conciseUpper[0o74] = UPPER;
conciseUpper[0o75] = "\b";
conciseUpper[0o77] = "\n";

const conciseLower = [];
conciseLower[0o00] = " ";
conciseLower[0o01] = "1";
conciseLower[0o02] = "2";
conciseLower[0o03] = "3";
conciseLower[0o04] = "4";
conciseLower[0o05] = "5";
conciseLower[0o06] = "6";
conciseLower[0o07] = "7";
conciseLower[0o10] = "8";
conciseLower[0o11] = "9";
conciseLower[0o20] = "0";
conciseLower[0o21] = "/";
conciseLower[0o22] = "s";
conciseLower[0o23] = "t";
conciseLower[0o24] = "u";
conciseLower[0o25] = "v";
conciseLower[0o26] = "w";
conciseLower[0o27] = "x";
conciseLower[0o30] = "y";
conciseLower[0o31] = "z";
conciseLower[0o33] = ",";
conciseLower[0o34] = BLACK;
conciseLower[0o35] = RED;
conciseLower[0o36] = "\t";
conciseLower[0o40] = "\u{B7}\b"; // · non-spacing
conciseLower[0o41] = "j";
conciseLower[0o42] = "k";
conciseLower[0o43] = "l";
conciseLower[0o44] = "m";
conciseLower[0o45] = "n";
conciseLower[0o46] = "o";
conciseLower[0o47] = "p";
conciseLower[0o50] = "q";
conciseLower[0o51] = "r";
conciseLower[0o54] = "-";
conciseLower[0o55] = ")";
conciseLower[0o56] = "\u{203E}\b"; // ‾ non-spacing
conciseLower[0o57] = "(";
conciseLower[0o61] = "a";
conciseLower[0o62] = "b";
conciseLower[0o63] = "c";
conciseLower[0o64] = "d";
conciseLower[0o65] = "e";
conciseLower[0o66] = "f";
conciseLower[0o67] = "g";
conciseLower[0o70] = "h";
conciseLower[0o71] = "i";
conciseLower[0o72] = LOWER;
conciseLower[0o73] = ".";
conciseLower[0o74] = UPPER;
conciseLower[0o75] = "\b";
conciseLower[0o77] = "\n";

