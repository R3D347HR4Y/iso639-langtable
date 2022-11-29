const mix = require("../json/mixedLangCI.json");

/**
 * Returns the ISO639-1 of a Language from its name in any language.
 * @param {string} name
 */
const getIsoFromName = (name) => {
  const cleanName = name
    .trim()
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
  return mix[cleanName];
};

module.exports = { getIsoFromName };
