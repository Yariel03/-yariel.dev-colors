# Colores en consola

El proyecto tiene como fin imprimir mensajes de consola con colores basicos y al moento de usar la dependecia su peso sea minimo

```js

- # Los colores que existen son :

const { Color, consoleLog } = require("yariel.dev-colors");

consoleLog(Color.Black, "helloWord");
consoleLog(Color.Blue, "helloWord");
consoleLog(Color.BlueBg, "helloWord");
consoleLog(Color.Cyan, "helloWord");
consoleLog(Color.Gray, "helloWord");
consoleLog(Color.Green, "helloWord");
consoleLog(Color.GreenBg, "helloWord");
consoleLog(Color.Magenta, "helloWord");
consoleLog(Color.Red, "helloWord");
consoleLog(Color.RedBg, "helloWord");
consoleLog(Color.White, "helloWord");
consoleLog(Color.Yellow, "helloWord");

```

# Uso

si desea probar puede realizarlo asi:

```js
const { consoleLog, Color } = require("yariel.dev-colors");
consoleLog(Color.Yellow, "Hello World");
```

# Autor

Yariel Baldeon

- [LinkedIn](https://www.linkedin.com/in/alexander-baldeon-586533160/)
- [alex-003.net@live.com](mailto:alex-003.net@live.com)
