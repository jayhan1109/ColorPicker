// var temp = document.getElementById('reset');
// temp.addEventListener('click', function() {
//     temp.style.color = 'RGB(250, 65, 42)';
// })

var sqaureNumber = 6;
var rgbArray = [0, 0, 0];
var answerRGB;

var squareALL = document.querySelectorAll('.square');
var rgbDisplay = document.querySelector('.display-4');
var resetButton = document.getElementById('reset');
var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');


function setUp() {
    getColor();
    answerSquare();
    checkAnswer();
}

function checkAnswer() {
    for (var i = 0; i < sqaureNumber; i++) {
        squareALL[i].addEventListener('click', function() {
            if (this.style.background === answerRGB) {
                Win();
            } else {
                this.style.visibility = 'hidden';
            }
        })
    }
}

function Win() {
    for (var i = 0; i < sqaureNumber; i++) {
        squareALL[i].style.background = answerRGB;
    }

    document.querySelector('.top').style.background = answerRGB;
    document.getElementById('correctWord').textContent = 'Correct!';
    resetButton.textContent = 'PLAY AGAIN?';
}

function reset() {
    getColor();
    answerSquare();
    document.getElementById('correctWord').textContent = '';
    document.querySelector('.top').style.background = 'rgb(255,255,255)';
    resetButton.textContent = 'New Colors';
    for (var i = 0; i < sqaureNumber; i++) {
        squareALL[i].style.visibility = 'visible';
    }

}

resetButton.addEventListener('click', function() {
    reset();
})

easyButton.addEventListener('click', function() {
    sqaureNumber = 3;
    for (var i = 0; i < sqaureNumber; i++) {
        squareALL[i + 3].style.display = 'none';
    }
    reset();
})

hardButton.addEventListener('click', function() {
    sqaureNumber = 6;
    for (var i = 3; i < sqaureNumber; i++) {
        squareALL[i].style.display = 'block';
    }
    reset();
})

function getColor() {
    for (var i = 0; i < sqaureNumber; i++) {
        for (var j = 0; j < 3; j++) {
            var rgbTemp = Math.floor(Math.random() * 256);
            rgbArray[j] = rgbTemp;
        }
        squareALL[i].style.background = "rgb(" + rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2] + ")";

    }
}

function answerSquare() {
    var temp = Math.floor(Math.random() * sqaureNumber);
    answerRGB = squareALL[temp].style.background;
    rgbDisplay.textContent = answerRGB;

}

setUp();