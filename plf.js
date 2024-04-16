const overlay = document.createElement('div');
// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    background-image: url('https://alfa-13.github.io/plf/lg.png');
    background-color: red;
    background-size: auto;
    background-repeat: no-repeat;
`;

document.body.appendChild(overlay);


function hideOverlay() {
    overlay.style.display = 'none';
}

window.addEventListener('load', () => {
    setTimeout(hideOverlay, 2000);
});
