const btnFlorest = document.querySelector('.florest');
const btnRain = document.querySelector('.rain');
const btnCoffe = document.querySelector('.coffe');
const btnFire = document.querySelector('.fire');
const btnPlay = document.querySelector('.play');
const btnStop = document.querySelector('.stop');
const btnMoreFiveMinutes = document.querySelector('.moreFiveMinutes');
const btnLessFiveMinutes = document.querySelector('.lessFiveMinutes');
const btnDarkMode = document.querySelector('.themeDark');
const btnWhiteMode = document.querySelector('.themeWhite');
const elementEffects = document.querySelector('.effects');
const allElementsEffects = document.querySelectorAll('.effects > *');
const allElementsControls = document.querySelectorAll('.controls > *');
const allElementsTimerDisplay = document.querySelectorAll('.timerControls > *');



let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let volumeFlorest = document.querySelector('#volFlorest');
let volumeRain = document.querySelector('#volRain');
let volumeFire = document.querySelector('#volFire');
let volumeCoffe = document.querySelector('#volCoffe');



export const elements = {
    btnFlorest,
    btnRain,
    btnCoffe,
    btnFire,
    btnPlay,
    btnStop,
    btnMoreFiveMinutes,
    btnLessFiveMinutes,
    btnDarkMode,
    btnWhiteMode,
    minutes,
    seconds,
    volumeFlorest,
    volumeRain,
    volumeFire,
    volumeCoffe,
    elementEffects,
    allElementsEffects,
    allElementsControls,
    allElementsTimerDisplay
}
