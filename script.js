
//Get user input for canvas size.
const userInput = parseInt(prompt('How many rows would you like?'));
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

    for(i=1; i<=num; i++){
        const pixel = document.createElement('div');
        canvas.append(pixel);
    }
}