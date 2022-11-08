const container = document.getElementById('container');
const squareGarden = document.getElementById('square-garden');
const select = document.getElementById('cuadrant');
const buttonSquaresOpt = document.querySelector('#square-garden input[type="submit"');
let squaresPerLine = 6
let redRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let greenRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let blueRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let oneRandomColor = `rgba(${redRgb}, ${greenRgb}, ${blueRgb}, 1)`; // ONLY ONE VALUE PER PAGE LOAD

container.style.backgroundColor = 'rgba(0, 0, 0, 1)';
/* FUNCTION TO CALL DIFERENT COLORS EVERY TIME IS CALLED */

function randomColorsGenerator() {
    return `rgba(${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)}, 1)`;
}

// FUNCTION TO CALL ONE SINGLE COLOR

function oneSingleColor() {
    return oneRandomColor;
}

// DARKER MODE



// FUNCTION TO ASK SQUARES PER SIDE OF GRID

function makeGridXAndY(squaresPerLine) {
    let rows = squaresPerLine;
    let cols = squaresPerLine;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows*cols); c++) {
        let cells = document.createElement('div');
        container.appendChild(cells).className = 'grid-item';
        }    
    }
        
makeGridXAndY(squaresPerLine);

// 

let divSelector = document.querySelectorAll('#container>div');

//RAINBOW COLORS

// for(let i = 0; i < divSelector.length; i++){
//     divSelector[i].style.backgroundColor = oneRandomColor;
//     divSelector[i].addEventListener('mouseover', selectItem);
//     }

//BLACK COLOR

for(let i = 0; i < divSelector.length; i++){
    divSelector[i].style.backgroundColor = oneRandomColor;
    divSelector[i].addEventListener('mouseover', coldplayMode);
    }
    


/* FUNCTION TO SELECT INDIVIDUAL CELL AND CALL RANDOMCOLOR FOR EVENT */

function selectItem(e) {
    e.target.style.backgroundColor = randomColorsGenerator();
    console.log(this.style.opacity);
    //e.target.style.removeProperty('opacity');
    e.target.style.opacity = "" // THIS OPTION IS MORE COMPATIBLE WITH ELDER BROWSERS
    console.log(e.target);
}


//FUNCTION TO SELECT CELL INTO BLACK COLOR 
function blackItem(e) {
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    e.target.style.removeProperty('opacity');
    console.log(e.target);
}

// FUNCTION TO YELLOW
function coldplayMode(e) {
    e.target.style.backgroundColor = 'rgba(255, 255, 0, 1)';
    console.log(e.target);
}

// FUNCTION TO DARKER SIDE
let opacityIndex = 10;
let opacityValue 
var opacityDegree;

function toEternalDarkness(e) {
    opacityValue = opacityIndex -1;
    opacityDegree = opacityValue / 10;
    if (!e.target.style.opacity) {
        e.target.style.opacity = opacityDegree;      
    } else if (e.target.style.opacity !== 0) {
        e.target.style.opacity -= 0.1;
    } else {return}
}


// TO RESTART

const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
    console.log("clicked restart");
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].style.backgroundColor = 'rgba(255, 255, 255, 1)';
        divSelector[i].style.removeProperty('opacity');
        }
    })

// ADDEVENTLISTENER FOR RANDOMCOLORS

const rainbowSix = document.getElementById('rainbow');

rainbowSix.addEventListener('click', () => {
    console.log("clicked rainbow");
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].removeEventListener('mouseover', blackItem);
        divSelector[i].removeEventListener('mouseover', coldplayMode);
        divSelector[i].removeEventListener('mouseover', toEternalDarkness);
        divSelector[i].addEventListener('mouseover', selectItem);
        }
})

// ADDEVENTLISTENER FOR BLACK COLOR

const blackout = document.getElementById('blackout');

blackout.addEventListener('click', () => {
    console.log('clicked blackout');
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].removeEventListener('mouseover', selectItem);
        divSelector[i].removeEventListener('mouseover', coldplayMode);
        divSelector[i].removeEventListener('mouseover', toEternalDarkness);
        divSelector[i].addEventListener('mouseover', blackItem);
        }
})

// ADDEVENTLISTENER FOR OPACITY

const darker =document.getElementById('darker');

darker.addEventListener('click', () => {
    console.log('darker');
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].removeEventListener('mouseover', selectItem);
        divSelector[i].removeEventListener('mouseover', coldplayMode);
        divSelector[i].removeEventListener('mouseover', blackItem);
        divSelector[i].addEventListener('mouseover', toEternalDarkness);
        }
})

// ADDEVENTLISTENER TO SHOW SQUARES OPTIONS

const gridPrompter = document.querySelector('.button-options');

gridPrompter.children[0].addEventListener('click', () => {
    console.log('clicked prompter');
    squareGarden.style.visibility = "visible";
})

// ADDEVENTLISTENER FOR SQUAREGARDENOPT BUTTON

buttonSquaresOpt.addEventListener('click', (e) => {
    console.log('clicked buttonSquareOpt');
    squareGarden.style.visibility = "hidden";
    e.preventDefault();
    container.innerHTML = "";
    console.log(select.value);
    makeGridXAndY(select.value); 
    divSelector = document.querySelectorAll('#container>div');
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].style.backgroundColor = oneRandomColor;
        divSelector[i].addEventListener('mouseover', coldplayMode);
        }        
})