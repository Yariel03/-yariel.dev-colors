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
  Random: "Random",
  Warn: "Warn",
  Error: "Error",
  Info: "Info",
  Check: "Check",
};

const consoleLog = (color: string, message: string) => {
  switch (color) {
    case "Random":
      printRandomColors(message);
      return;
    case "Warn":
      console.log(Color.Yellow, `⚠️  ${message} `);
      return;
    case "Error":
      console.log(Color.Red, `❌  ${message} `);
      return;
    case "Info":
      console.log(Color.Blue, `🔵  ${message} `);
      return;
    case "Check":
      console.log(Color.Green, `✅  ${message} `);
      return;
    default:
      console.log(color, `${message} `);
      return;
  }
};

const printRandomColors = (str: string) => {
  const colors = [31, 32, 33, 34, 35, 36, 37];
  const result = str
    .split("")
    .map((char) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return `\x1b[${color}m${char}\x1b[0m`;
    })
    .join("");

  console.log(result);
};
export { consoleLog, Color };
