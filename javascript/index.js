const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const minDec = minutes[0];
  const minUni = minutes[1];

  minDecElement.innerText = minDec;
  minUniElement.innerText = minUni;
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  const secDec = seconds[0];
  const secUni = seconds[1];

  secDecElement.innerText = secDec;
  secUniElement.innerText = secUni;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  const milDec = milliseconds[0];
  const milUni = milliseconds[1];

  milDecElement.innerText = milDec;
  milUniElement.innerText = milUni;
}

function printSplit() {
  // ... your code goes here
  const splitElement = document.createElement('li');
  splitElement.innerText = chronometer.split();
  splitsElement.appendChild(splitElement);
}

function clearSplits() {
  // ... your code goes here
  const splits = splitsElement.querySelectorAll('li');
  for (let split of splits) {
    splitsElement.removeChild(split);
  }
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

function setSplitBtn() {
  // ... your code goes here
  printSplit();
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime);
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  printTime();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === 'btn start') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === 'btn split') {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
