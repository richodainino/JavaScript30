let pressed = [];
const secretCodeList = ["excelsior", "nyapnyap"];
const allParagraphs = document.querySelectorAll('p');
const container = document.querySelector('.container');
const maxLength = Math.max(...(secretCodeList.map(el => el.length)));

function checkCode(secretCode, index) {
  const pressedString = pressed.join("");
  const pressedCode = pressed[maxLength-1] !== undefined ? pressedString.slice(-secretCode.length + maxLength) : pressedString;

  if (secretCode === pressedCode && index === 0) {
    allParagraphs.forEach(paragraph => paragraph.classList.add("hidden"));
    cornify_add();
  }
  else if (secretCode === pressedCode && index === 1) {
    allParagraphs.forEach(paragraph => paragraph.classList.add("hidden"));
    container.classList.add("secret");
  }
}

window.addEventListener('keyup', (e) =>{
  pressed.push(e.key);

  if (pressed.length > maxLength) {
    pressed.shift();
  }

  secretCodeList.forEach(checkCode);
});