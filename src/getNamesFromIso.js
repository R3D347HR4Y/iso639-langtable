const lang = require("../json/allReverse.json");

/**
 * Returns the names of a Language from its iso locale.
 * @param {string} iso
 */
const getNamesFromIso = (iso) => {
  const arr = Object.keys(lang);
  const ret = {};
  arr.forEach((key) => (ret[key] = lang[key][iso]));
  return ret;
};

module.exports = { getNamesFromIso };
