const mix = require("./json/mixedLangCI.json");
console.time("t1");
const test = "español"
  .toLocaleLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "");
console.log(mix[test]);
console.timeEnd("t1");
