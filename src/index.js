const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let words = expr.split("**********");
  let encoded = [];
  for (let word = 0; word < words.length; word++) {
    let qwerty = [];
    for (let a = 0; a < words[word].length; a += 10) {
      let symbol = words[word].slice(a, a + 10);
      let objKey = "";
      for (let b = 0; b < symbol.length; b += 2) {
        let s = symbol.slice(b, b + 2);
        if (s === "11") {
          objKey += "-";
        } else if (s === "10") {
          objKey += ".";
        }
      }
      qwerty.push(MORSE_TABLE[objKey]);
    }
    encoded.push(qwerty);
  }
  let resArr = [];
  encoded.forEach((a) => {
    let word = "";
    a.forEach((b) => {
      word += b;
    });
    resArr.push(word);
  });
  return resArr.join(" ");
}

module.exports = {
  decode,
};