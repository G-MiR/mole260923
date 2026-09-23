const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
const squares = document.querySelectorAll(".square");

let hitPosition;
let result=0;
let currentTime = 60;

function randomSquare() {
    // forEach = 처음부터 끝까지 다
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id
}


function moveMole() {
    timId = setInterval(randomSquare,500);
}
moveMole();

squares.forEach(square => {
    square.addEventListener("mousedown", ()=>{
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition=null;
        }
    });
});

function countDown() {
    currentTime--;
    timeLeft.textContent=currentTime;
    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timId);
        alert("Game over! Yourfinal score id " + result);
    }
}

let countDownTimerId = setInterval(countDown,1000);

