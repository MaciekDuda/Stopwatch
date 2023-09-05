
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');

let countTime;
let seconds = 0;
let minutes = 0;
let timesArr = [];

//zmiana koloru
const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
let root = document.documentElement;

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

// zmiana kolorów
colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(8, 159, 36)');
    root.style.setProperty('--hover-color', 'rgb(5, 118, 26)');
});

colorFour.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(224, 65, 182)');
    root.style.setProperty('--hover-color', 'rgb(213, 39, 167)');
});


