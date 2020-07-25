let squares = document.querySelectorAll('.square');

// Loop over all squares to add a color and an Event Listener for click
let colors = getRandomColors(6);
let numSquares = 6;
let ansColor = pickColor();
let dispColor = document.getElementById('dispColor');
dispColor.textContent = ansColor;
let message = document.getElementById('message');
message.textContent = 'Pick a color...';
let h1 = document.querySelector('h1');
let reset = document.getElementById('reset');
let easy = document.getElementById('easy');
let hard = document.getElementById('hard');

easy.addEventListener('click', function() {
    message.textContent = 'Pick a color...';
    this.classList.add('selected');
    hard.classList.remove('selected');
    numSquares = 3;
    colors = getRandomColors(numSquares);
    ansColor = pickColor();
    dispColor.textContent = ansColor;
    for(let i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    reset.textContent = 'New Colors';
});

hard.addEventListener('click', function() {
    message.textContent = 'Pick a color...';
    this.classList.add('selected');
    easy.classList.remove('selected');
    numSquares = 6;
    colors = getRandomColors(numSquares);
    ansColor = pickColor();
    dispColor.textContent = ansColor;
    for(let i=0; i<squares.length; i++) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
    }
    reset.textContent = 'New Colors';
});

reset.addEventListener('click', function() {
    message.textContent = 'Pick a color...';
    this.textContent = 'New Colors';
    colors = getRandomColors(numSquares);
    ansColor = pickColor();
    dispColor.textContent = ansColor;
    for(let i = 0; i < squares.length; i++) {
        // Set color
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
});


for(let i = 0; i < squares.length; i++) {
    // Set color
    squares[i].style.backgroundColor = colors[i];

    // Set Event
    squares[i].addEventListener('click', function() {
        // Check if the clicked square has correct color
        let clickColor = this.style.backgroundColor;
        console.log(clickColor, ansColor);

        if(clickColor === ansColor) {
            message.textContent = 'CORRECT!';
            gameOver(ansColor);
        } else {
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try Again';
        }
    });
}


function gameOver(color) {
    // When correct color is picked, change all colors to match given color
    for(let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
    reset.textContent = 'Play Again?';
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getColor() {
    const res = String(Math.floor(Math.random() * 256));
    return res;
}

function getRandomColors(n) {
    let arr = [];
    for(let i=0; i<n; i++) {
        arr.push(`rgb(${getColor()}, ${getColor()}, ${getColor()})`);
    }
    return arr;
}
