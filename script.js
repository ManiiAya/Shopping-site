
const hoverText = document.getElementById('hover-text');
const originalText = hoverText.textContent;
function changeText() {
hoverText.textContent = 'Buy Now';
}
function resetText() {
hoverText.textContent = originalText;
}
hoverText.addEventListener('mouseenter', changeText);
hoverText.addEventListener('mouseleave', resetText);
