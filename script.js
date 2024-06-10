'user strict'
// PLan of action 
// First generate 16 x 16 divs
// add them onto the webpage
function createCanvas(sideLength = 16) {
    const container = document.querySelector('.container');
    container.textContent = ''; // Clear existing content
    const containerSize = container.clientWidth; // Get container size in pixels
    const boxSize = containerSize / sideLength; // Size of each box in pixels
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // Root font size in pixels
    const boxSizeRem = boxSize / rootFontSize; // Convert box size to rem

    console.log(boxSizeRem);

    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const sketchSquare = document.createElement('div');
            sketchSquare.classList.add('sketch-box');
            sketchSquare.style.width = `${boxSizeRem}rem`;
            sketchSquare.style.height = `${boxSizeRem}rem`;
            container.appendChild(sketchSquare);
        }
    }

    drawing(); // Enable drawing on the new canvas
}

function drawing() {
    const squares = document.querySelectorAll('.sketch-box');
    squares.forEach((square) => 
        square.addEventListener('mouseover', setBg)
    )
}

function gridSideLength() {
    const lengthChangeBtn = document.querySelector('.side-length');
    lengthChangeBtn.addEventListener('click', () => {
        let input = userNumber();
        if (input) {
            createCanvas(input); // Create a new canvas based on user input
        }
    });
}

function userNumber() {
    let input = parseInt(prompt('What length of the sides did you want', '16').trim());
    while (!Number.isInteger(input) || input <= 0) {
        input = parseInt(prompt('Please enter a valid positive integer!', '16').trim());
    }
    return input;
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;

}

// Initialize everything on page load
createCanvas();
gridSideLength();
