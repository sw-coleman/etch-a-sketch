

let userInput = 16;
const canvasSize = userInput * userInput; //Take amount of rows and multiply for total canvas size

createCanvas(canvasSize);

//Function to create divs for .canvas
function createCanvas(num){
    //Reference to .canvas class
    const canvas = document.querySelector('.canvas');
    //Format canvas to ensure square shape
    canvas.style.cssText = `
        grid-template-columns: repeat(${userInput}, 1fr);
        grid-template-rows: repeat(${userInput}, 1fr);`;
    //For loop to create required divs
    for(i=1; i<=num; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.append(pixel);
    }
}
//Slider to select cavas size functionality with display that is updated as user uses the slider
const slider = document.querySelector('.slider')
const output = document.querySelector('.slider-value')
output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    userinput = this.value;
    //createCanvas(canvasSize); Need to replace with a function that refreshes the canvas all together.
    output.textContent = `${this.value} x ${this.value}`
}

//Create nodelist for each pixel to add drawing functionality to canvas.
const pixels = document.querySelectorAll('.pixel');
//Change background colour for each pixel from pixels nodelist when 'mouseover' occurs to allow user to draw on canvas.
pixels.forEach(function(ele) {
        ele.addEventListener('mouseover', highlight);
    function highlight() {
        ele.setAttribute('style', 'background-color:black')
    }
});

