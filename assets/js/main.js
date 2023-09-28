//# ENCRYPT
const encrypt = () => {
  const key = Number(document.querySelector("#ceasarKeyInput").value);
  const inputWord = document.querySelector("#ceasarInput").value;
  const clearAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let encrypted = "";
  const secretAlpha = clearAlpha.map((elt) => {
    return elt.toUpperCase();
  });

  const removed = secretAlpha.splice(0, key);
  for (let i = 0; i < removed.length; i++) {
    secretAlpha.push(removed[i]);
  }
  let word = inputWord.split(" ").join("").toLowerCase();

  for (let i = 0; i < word.length; i++) {
    encrypted += secretAlpha[clearAlpha.indexOf(word[i])];
  }
  document.querySelector("#resultC").innerHTML = encrypted;
};

//# DECRYPT

const decrypt = () => {
  const key = Number(document.querySelector("#ceasarKeyInput").value);
  const inputWord = document.querySelector("#ceasarInput").value;
  const clearAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let decrypted = "";
  const secretAlpha = clearAlpha.map((elt) => {
    return elt.toUpperCase();
  });

  const removed = secretAlpha.splice(0, key);
  for (let i = 0; i < removed.length; i++) {
    secretAlpha.push(removed[i]);
  }

  for (let i = 0; i < inputWord.length; i++) {
    decrypted += clearAlpha[secretAlpha.indexOf(inputWord[i])];
  }
  document.querySelector("#resultC").innerHTML = decrypted;
};

// ! MORSE CRYPTER

const morseCrypt = () => {
  let text = document.querySelector("#morseInput").value;
  let morseString = "";
  let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "/ " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." },
  ];
  text = text.split(" ").join(" ").toUpperCase().split("");

  for (let i = 0; i < text.length; i++) {
    morseAlphabet.forEach((elt) => {
      if (text[i] === elt.letter) {
        morseString += elt.morseCode;
      }
    });
  }
  document.querySelector("#resultM").innerHTML = morseString;
};
