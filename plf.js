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
    z-index: 999;

    background-image: url('https://alfa-13.github.io/plf/lg.png');
    background-color: #3CC7F8;
    background-size: 25%;
    background-repeat: no-repeat;
    background-position: center center;
`;

document.body.appendChild(overlay);


function hideOverlay() {
    overlay.style.display = 'none';
}

window.addEventListener('load', () => {
    setTimeout(hideOverlay, 2000);
});
