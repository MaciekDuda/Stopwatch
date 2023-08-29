const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');

let countTime;
let seconds = 0;
let minutes = 0;
let timesArr = [];

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 100); //ustawić 1000ms
}; //dodać setne sekund

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
		console.log(timesArr);
	}

	clearStuff();
};

const handleReset = () => {
	clearStuff();
	time.style.visibility = 'hidden';
	timesArr = [];
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = `0:00`;
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showArchive = () => { 

    timeList.textContent = '';
    let num = 1; 

    timesArr.forEach(el => {
       const newTime = document.createElement('li');
       newTime.innerHTML = `Pomiar nr ${num}: <span>${el}</span>` 

       timeList.appendChild(newTime)
       num++;
    })
 }

 const showModal = () => { 
    
    if(!(modalShadow.style.display === 'block')){
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }
    
    modalShadow.classList.toggle('modal-animation')
  }


 const closeModal = () => { 
    modalShadow.style.display = 'none';
    modalShadow.classList.toggle('modal-animation')
  }

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archiveBtn.addEventListener('click', showArchive);

infoBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);


