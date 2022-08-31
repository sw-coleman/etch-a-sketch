
let heightWidth = 16;
const canvasSize = heightWidth * heightWidth; //Take amount of rows and multiply for total canvas size
const canvas = document.querySelector('.canvas');
let paintColour = 'black';

createCanvas(canvasSize);

//Function to create divs for .canvas
function createCanvas(num){
    //Format canvas to ensure square shape
    canvas.style.cssText = `
        grid-template-columns: repeat(${heightWidth}, 1fr);
        grid-template-rows: repeat(${heightWidth}, 1fr);`;
    //For loop to create required divs
    for(i=1; i<=num; i++){
        const pixel = document.createElement('div');
        canvas.append(pixel);
        pixel.classList.add('pixel');
        pixel.setAttribute('style', 'background-color: white');
        pixel.addEventListener("mouseover", colourPixels)
    }
}

const pixels = document.querySelectorAll('.pixel');

//Function to reset canvas upon change of canvas size via slider.
function resetCanvas(){
    pixels.forEach((pixel) => pixel.remove());
    createCanvas(canvasSize);
}

//Slider to allow user to change canvas size with display that is updated as user uses the slider
const slider = document.querySelector('.slider');
const output = document.querySelector('.slider-value');
output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    heightWidth = this.value;
    resetCanvas();
    output.textContent = `${this.value} x ${this.value}`
}

//Change background colour for each pixel from pixels nodelist when 'mouseover' occurs to allow user to draw on canvas.
function colourPixels() {
    pixels.forEach(function(ele) {
        ele.addEventListener('mouseover', highlight);
        function highlight() {
            ele.setAttribute('style', `background-color: ${paintColour}`);
        }
    });
}

//function to change color upon 'onclick' through HTML button.
function changeColour(choice) {
    paintColour = choice;
}
    
