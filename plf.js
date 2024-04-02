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
    background-color: rgba(255, 255, 255, 1);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
//svgImage.src = 'https://alfa-13.github.io/plf/i.png'; Esta es la correcta
svgImage.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHpiaTg5ZzUwazd2djRjdWRscWxyY3FqOWF0b2RxOWhhYXRzMXRjeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hlQp71jpHyds2t2/giphy.gif'
svgImage.style.cssText = `
    max-width: 50%;
    
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`; //max-height: 100%;
svgImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
