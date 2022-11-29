import mix from "../json/mixedLangCI.json";

/**
 * Returns the ISO609-1 of a Language from its name in any language.
 * @param {string} name
 */
export default getIsoFromName = (name) => {
  const cleanName = name
    .trim()
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
  return mix[cleanName];
};
