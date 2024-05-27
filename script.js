'user strict'
// PLan of action 
// First generate 16 x 16 divs
// add them onto the webpage
function createCanvas(){
    const container = document.querySelector('.container');
    for (let i = 0 ; i < 16 ; i ++){
        for (let j = 0 ; j < 16 ; j ++) {
            const sketchSquare = document.createElement('div');
            sketchSquare.classList.add('sketch-box');
            container.appendChild(sketchSquare);
        }   
    }
    console.log(container);
}

function drawing() {
    const buttons = document.querySelectorAll('.sketch-box');
    buttons.forEach((button) => 
        button.addEventListener('mouseover', function(){
            button.style.backgroundColor = 'red'; 
        })
    );

}


createCanvas();
drawing();