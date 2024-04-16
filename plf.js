// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://alfa-13.github.io/plf/lg.png';
svgImage.style.cssText = `
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'block';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);


function hideOverlay() {
    svgImage.style.display = 'block';
}

window.addEventListener('load', hideOverlay);
