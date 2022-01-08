const pressed = [];
const secretCodeList = ["excelsior", "nyapnyap"];
const maxLength = Math.max(...(secretCodeList.map(el => el.length))); // Max length is the length of the longest secret code
const allParagraphs = document.querySelectorAll('p');
const container = document.querySelector('.container');

function checkCode(secretCode, index) {
  const pressedString = pressed.join("");
  const pressedCode = pressed[maxLength-1] !== undefined ? pressedString.slice(-secretCode.length + maxLength) : pressedString;
  // If it's the first time the code got type, it will immediately check the pressed code, but if it is not, then the pressed code will be sliced

  if (secretCode === pressedCode && index === 0) { // If we enter the first secret code
    allParagraphs.forEach(paragraph => paragraph.classList.add("hidden"));
    cornify_add();
  }
  else if (secretCode === pressedCode && index === 1) { // If we enter the second secret code
    allParagraphs.forEach(paragraph => paragraph.classList.add("hidden"));
    container.classList.add("secret");
  } // If there's a different secret code, we can add else if statement and change the index accordingly
}

window.addEventListener('keyup', (e) =>{
  pressed.push(e.key);

  if (pressed.length > maxLength) { // To cap the length of our pressed key array
    pressed.shift();
  }

  secretCodeList.forEach(checkCode);
});