"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.consoleLog = void 0;
var Color = {
    Red: "\x1b[31m%s\x1b[0m",
    Green: "\x1b[32m%s\x1b[0m",
    Yellow: "\x1b[33m%s\x1b[0m",
    Blue: "\x1b[34m%s\x1b[0m",
    Magenta: "\x1b[35m%s\x1b[0m",
    Cyan: "\x1b[36m%s\x1b[0m",
    White: "\x1b[37m%s\x1b[0m",
    Black: "\x1b[30m%s\x1b[0m",
    Gray: "\x1b[90m%s\x1b[0m",
    RedBg: "\x1b[41m%s\x1b[0m",
    GreenBg: "\x1b[42m%s\x1b[0m",
    YellowBg: "\x1b[43m%s\x1b[0m",
    BlueBg: "\x1b[44m%s\x1b[0m",
    Random: "Random",
    Warn: "Warn",
    Error: "Error",
    Info: "Info",
    Check: "Check",
};
exports.Color = Color;
var consoleLog = function (color, message) {
    switch (color) {
        case "Random":
            printRandomColors(message);
            return;
        case "Warn":
            console.log(Color.Yellow, "\u26A0\uFE0F  ".concat(message, " "));
            return;
        case "Error":
            console.log(Color.Red, "\u274C  ".concat(message, " "));
            return;
        case "Info":
            console.log(Color.Blue, "\uD83D\uDD35  ".concat(message, " "));
            return;
        case "Check":
            console.log(Color.Green, "\u2705  ".concat(message, " "));
            return;
        default:
            console.log(color, "".concat(message, " "));
            return;
    }
};
exports.consoleLog = consoleLog;
var printRandomColors = function (str) {
    var colors = [31, 32, 33, 34, 35, 36, 37];
    var result = str
        .split("")
        .map(function (char) {
        var color = colors[Math.floor(Math.random() * colors.length)];
        return "\u001B[".concat(color, "m").concat(char, "\u001B[0m");
    })
        .join("");
    console.log(result);
};
