let paintColour = 'black';

//Function to create divs for .canvas
function createCanvas(num){
    const canvas = document.querySelector('.canvas');
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.remove());
    canvas.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let canvasSize = num*num; //Take amount of rows and multiply for total canvas size
    //For loop to create empty divs for canvas. 
    for(i=1; i<=canvasSize; i++){
        const pixel = document.createElement('div');
        pixel.addEventListener("mouseover", colourPixels);
        pixel.style.backgroundColor = 'white';
        canvas.insertAdjacentElement('beforeend', pixel);
        pixel.classList.add('pixel');
    }
}

createCanvas(16); //Create 16x16 canvas on loading page.

//Change size of canvas from user input in text box.
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createCanvas(input);
        const output = document.querySelector('.output');
        output.textContent = `${input} x ${input}`;
    } else {
        alert("Please select a number between 2 and 100.")
    }
}
//Change background colour for each pixel from pixels nodelist when 'mouseover' occurs to allow user to draw on canvas.
function colourPixels() {
    if(paintColour == 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = paintColour;   
    }
}
//Function to change and display colour upon click of HTML button.
function changeColour(choice) {
    paintColour = choice;
    const colourSelection = document.querySelector('.colour-selection');
    if(choice == 'rainbow') {
        colourSelection.textContent = `Current colour: Rainbow`; //Converts string to capitalise first letter.
    } else {
        colourSelection.textContent = `Current colour: ${paintColour.charAt(0).toUpperCase() + paintColour.slice(1)}`; //Converts string to capitalise first letter.
    }
}
//Clears canvas when resized.
function resetCanvas() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}



    
