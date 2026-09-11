//HTML Elements
const containerDiv = document.querySelector('.container');
const colorInput = document.querySelector('#clr-input');
const gridBtn = document.querySelector('.set-grid');
const randomClr = document.querySelector('.random-clr');
const blackClr = document.querySelector('.black-opacity');
let mode = "color"; //set to "color" to make grids colorful even when button is not clicked

// Makes initial grid
for(let i = 0; i < 256; i++) {
    const childDiv = document.createElement('div');
    containerDiv.appendChild(childDiv);
    childDiv.classList.add('child');
}

//Colored Mode
colorInput.addEventListener('click', () => {
    mode = "color";
    document.querySelector('.color').style.backgroundColor = 'white';
    blackClr.style.backgroundColor = 'rgb(246, 130, 246)';
    randomClr.style.backgroundColor = 'rgb(246, 130, 246)';
})

//Random Mode
randomClr.addEventListener('click', () => {
    mode = "random";
    randomClr.style.backgroundColor = 'white';
    document.querySelector('.color').style.backgroundColor = 'rgb(246, 130, 246)';
    blackClr.style.backgroundColor = 'rgb(246, 130, 246)';
})

//Black Mode
blackClr.addEventListener('click', () => {
    mode = "black";
    blackClr.style.backgroundColor = 'white';
    document.querySelector('.color').style.backgroundColor = 'rgb(246, 130, 246)';
    randomClr.style.backgroundColor = 'rgb(246, 130, 246)';
})

//Generates Random Color
function randomColor(red, green, blue, opacity) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    opacity = Math.floor(Math.random() * 10);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

let opacity = 0;
//Increases Black Color's Opacity
function increaseOpacity() {
    if(opacity < 1) {
        opacity += 0.1;
    }
    return `rgba(0, 0, 0, ${opacity})`;
}

//Grid child
const child = document.querySelector('.child');
const children = document.querySelectorAll('.child');
children.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        if(mode === "color") {
            event.target.style.backgroundColor = colorInput.value;
        }else if(mode === "random") {
            event.target.style.backgroundColor = randomColor(); 
        }else {
            event.target.style.backgroundColor = increaseOpacity();
        }
    })
})

//Sets Grid
gridBtn.addEventListener('click', () => {
    const userInput = prompt('How many squares per side do you wants(Maximum 100)?:')
    const totalDivsMade = userInput ** 2;
    if(userInput > 0 && userInput <= 100) {
        containerDiv.innerHTML = "";
        for(let i = 0; i < totalDivsMade; i++) {
            const childDiv = document.createElement('div');
            containerDiv.appendChild(childDiv);
            childDiv.classList.add('squares');
            
            const size = 640/userInput;
            childDiv.style.width = size + 'px';
            childDiv.style.height = size + 'px';
            childDiv.addEventListener('mouseover', (event) => {
                if(mode === "color"){
                    event.target.style.backgroundColor = colorInput.value;
                }else if(mode === "random") {
                    event.target.style.backgroundColor = randomColor();
                }else {
                    event.target.style.backgroundColor = increaseOpacity();
                }
            })
        }
    }else {
        alert("Please write a valid number between 0 and 100!");
    }
})

