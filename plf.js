const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url('https://alfa-13.github.io/plf/dldt.svg');
    background-color: #2387E9;
    background-size: 20%;
    background-repeat: no-repeat;
    background-position: center center;
`;

document.body.appendChild(overlay);

function hideOverlay() {
    overlay.style.display = 'none';
}

window.addEventListener('load', () => {
    setTimeout(hideOverlay, 5000);
});
