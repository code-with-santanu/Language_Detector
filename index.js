const franc = require("franc");
const langs = require("langs");
const color = require("colors");

const input = process.argv[2];

const langCode = franc(input);

if (langCode == "und")
  console.log("Sorry! Can't figure out. Try with more text", langCode);
else {
  const language = langs.where("3", langCode);
  console.log(`${language.name}`.green);
}
