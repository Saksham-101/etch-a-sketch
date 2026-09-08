
const containerDiv = document.querySelector('.container');

for(let i = 0; i < 256; i++) {
    const childDiv = document.createElement('div');
    containerDiv.appendChild(childDiv);
    childDiv.classList.add('child');
}

const child = document.querySelector('.child');
let children = document.querySelectorAll('.child');

children.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'green';
    })
})

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
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
            childDiv.addEventListener('mouseover', () => {
                childDiv.style.backgroundColor = 'yellow';
            })
        }
    }else {
        alert("Please write a valid number between 0 and 100!");
    }
})


