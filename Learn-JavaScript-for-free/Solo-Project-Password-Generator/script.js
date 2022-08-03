const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

let firstPass = document.getElementById('first-pass');
let secondPass = document.getElementById('second-pass');
let hasPassword = false;

let copyFirstEl = document.getElementById('copy-first');
let copySecondEl = document.getElementById('copy-second');
let lengthEl = document.getElementById('length-el');

function getRandomPass() {
  let randomPass = '';
  let length = Math.floor(lengthEl.value);

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomPass += characters[randomIndex];
  }

  return randomPass;
}

function generateRandomPasswords() {
  firstPass.textContent = getRandomPass();
  secondPass.textContent = getRandomPass();
  hasPassword = true;
  copyFirstEl.textContent = 'COPY';
  copySecondEl.textContent = 'COPY';
}

function copyFirstPass() {
  if (hasPassword) {
    let copyText = document.getElementById("first-pass");

    navigator.clipboard.writeText(copyText.textContent);

    copyFirstEl.textContent = 'COPIED';
    copySecondEl.textContent = 'COPY';
  }
}

function copySecondPass() {
  if (hasPassword) {
    let copyText = document.getElementById("second-pass");

    navigator.clipboard.writeText(copyText.textContent);

    copySecondEl.textContent = 'COPIED';
    copyFirstEl.textContent = 'COPY';
  }
}