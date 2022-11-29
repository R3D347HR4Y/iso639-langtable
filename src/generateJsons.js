const fs = require("fs/promises");
let path = "data";

const handleFiles = async (files) => {
  let i;
  let fileName;
  let filePath;
  // Tells fs to read an utf-8 file.
  let fileReadOptions = {
    encoding: "utf-8",
  };

  let mixedLang = {};

  let revLang = {};

  let allCS = {};

  for (i = 0; i < files.length; ++i) {
    fileName = files[i];
    filePath = path + "/" + fileName + "/language.json";
    const data = await fs.readFile(filePath, fileReadOptions);

    const r1 = handleJsonFileCI(data);
    mixedLang = { ...mixedLang, ...r1 };

    const r2 = handleJsonFileCS(data);
    allCS[fileName] = r2;

    const rlang = handleJsonFile2(data);
    revLang[fileName] = { ...revLang, ...rlang };
  }
  const tow = JSON.stringify(allCS);
  await fs.writeFile("json/allLanguageCS.json", tow, fileReadOptions);
  const ar = JSON.stringify(revLang);
  await fs.writeFile("json/allReverse.json", ar, fileReadOptions);
  const mix = JSON.stringify(mixedLang);
  await fs.writeFile("json/mixedLangCI.json", mix, fileReadOptions);
};

const handleJsonFileCI = (data) => {
  const dataObject = JSON.parse(data);
  const ret = {};
  for (const key of Object.keys(dataObject)) {
    ret[
      dataObject[key]
        .toLocaleLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
    ] = key;
  }
  return ret;
};

const handleJsonFileCS = (data) => {
  const dataObject = JSON.parse(data);
  const ret = {};
  for (const key of Object.keys(dataObject)) {
    ret[dataObject[key]] = key;
  }
  return ret;
};

const handleJsonFile2 = (data) => {
  const dataObject = JSON.parse(data);
  const ret = {};
  for (const key of Object.keys(dataObject)) {
    ret[key] = dataObject[key];
  }
  return ret;
};

fs.readdir(path).then((r) => {
  handleFiles(r);
});
