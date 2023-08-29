const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const info = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');

let countTime;
let seconds = 0;
let minutes = 0;

const handleStart = () => {
    clearInterval(countTime);

	countTime = setInterval(() => {
         if(seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
         } else if(seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`
         } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
         }
	}, 1000);
}; //dodać setne sekund

const handlePause = () => { 
    clearInterval(countTime);
 }

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
