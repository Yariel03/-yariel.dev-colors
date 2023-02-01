import { IColor } from "./interface/IColor";
const Color: IColor = {
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
  Random: "",
};

const consoleLog = (
  color: string,
  message: string,
  random: any = undefined
) => {
  if (random) {
    leer(message);
    return;
  }
  console.log(Color.Red, message);
};

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const leer = (msg: any) => {
  var inputValue = msg;
  var inputSplitted = inputValue.split("");

  let i = 0,
    inputLength = inputSplitted.length;
  var newLog = '"';
  var colors = "";
  for (i = 0; i < inputLength; i++) {
    // Chaque lettre est contenue dans inputSplitted[i]
    newLog += "%c" + inputSplitted[i];
    colors += ',"color: ' + randomColor() + ';"';
  }
  newLog += '"';
  var log = newLog + colors;
  console.log(`"${log}"`);
};

export { consoleLog, Color };
