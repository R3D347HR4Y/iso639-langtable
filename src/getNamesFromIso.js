import lang from "../json/allReverse.json";

/**
 * Returns the names of a Language from its iso locale.
 * @param {string} iso
 */
export default getNamesFromIso = (iso) => {
  const arr = Object.keys(lang);
  const ret = {};
  arr.forEach((key) => (ret[key] = lang[key][iso]));
  return ret;
};
