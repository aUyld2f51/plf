document.body.style.ccsText = `
    background-color: blue;
`

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://alfa-13.github.io/plf/lg.png';
svgImage.style.cssText = `
    display: block;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(svgImage);

function hideOverlay() {
    svgImage.style.display = 'block';
}

window.addEventListener('load', hideOverlay);
