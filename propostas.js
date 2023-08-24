const textToType = "CONCORDIA_SOBRENATURAL";
const typingTextElement = document.getElementById('typing-text');
const cursorElement = document.getElementById('typing-cursor');
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typingTextElement.textContent += textToType.charAt(index);
    index++;
    const randomDelay = Math.random() * 50 + 25; // Intervalo aleatório entre 50ms e 250ms
    setTimeout(typeText, randomDelay);
  }
}

typeText();

function blinkCursor() {
  cursorElement.style.opacity = (cursorElement.style.opacity === '0') ? '1' : '0';
  setTimeout(blinkCursor, 500); // Intervalo de piscar o cursor em milissegundos (500ms neste caso)
}

blinkCursor();




