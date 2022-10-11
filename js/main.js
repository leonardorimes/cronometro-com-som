import Sound  from "./sounds.js";
import{ elements } from "./elements.js";
import Controls from "./controls.js";

let timerTimeOut;
let secondsDisplay = "00";
let minutesDisplay = 25;


const{
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
} = elements;

const controls = Controls({
    minutesDisplay,
    timerTimeOut,
    secondsDisplay,
    seconds,
    minutes,
    btnDarkMode,
    btnWhiteMode,
    elementEffects,
    allElementsEffects,
    allElementsControls,
    allElementsTimerDisplay
    
});


const sound = Sound();


    btnFlorest.addEventListener("click", () => {
    if(elementEffects.classList.contains('darkClass')){
            controls.removeBtnActive(btnRain, btnCoffe,  btnFire, "darkClassActive");
        }
    
    controls.removeBtnActive(btnRain, btnCoffe,  btnFire, "btnActive");

    if(elementEffects.classList.contains('darkClass')){
        controls.addBtnActive(btnFlorest, "darkClassActive")
    }
    controls.addBtnActive(btnFlorest, "btnActive")
    sound.pressButton(sound.buttonFlorestPressAudio);
    sound.removeSoundActive(sound.buttonRainPressAudio, sound.buttonCoffePressAudio, sound.buttonFirePressAudio);
});

btnRain.addEventListener("click", () => {
    if(elementEffects.classList.contains('darkClass')){
        controls.removeBtnActive(btnFlorest, btnCoffe,  btnFire, "darkClassActive");
    }
    controls.removeBtnActive(btnFlorest, btnCoffe,  btnFire, "btnActive");

    if(elementEffects.classList.contains('darkClass')){
        controls.addBtnActive(btnRain, "darkClassActive")
    }

    controls.addBtnActive(btnRain, "btnActive")
    sound.pressButton(sound.buttonRainPressAudio)
    sound.removeSoundActive(sound.buttonFlorestPressAudio, sound.buttonCoffePressAudio, sound.buttonFirePressAudio);

});

btnCoffe.addEventListener("click", () => {
    if(elementEffects.classList.contains('darkClass')){
        controls.removeBtnActive(btnFlorest, btnRain,  btnFire, "darkClassActive");
    }

    controls.removeBtnActive(btnFlorest, btnRain,  btnFire, "btnActive");

    if(elementEffects.classList.contains('darkClass')){
        controls.addBtnActive(btnCoffe, "darkClassActive")
    }

    controls.addBtnActive(btnCoffe, "btnActive")
    sound.pressButton(sound.buttonCoffePressAudio);
    sound.removeSoundActive(sound.buttonFlorestPressAudio, sound.buttonRainPressAudio, sound.buttonFirePressAudio);
});

btnFire.addEventListener("click", () => {
    if(elementEffects.classList.contains('darkClass')){
        controls.removeBtnActive(btnFlorest, btnRain,  btnCoffe, "darkClassActive");
    }
    controls.removeBtnActive(btnFlorest, btnRain,  btnCoffe, "btnActive");

    if(elementEffects.classList.contains('darkClass')){
        controls.addBtnActive(btnFire, "darkClassActive")
    }


    controls.addBtnActive(btnFire, "btnActive")
    sound.pressButton(sound.buttonFirePressAudio);
    sound.removeSoundActive(sound.buttonFlorestPressAudio, sound.buttonRainPressAudio, sound.buttonCoffePressAudio);
});


/* Time Controls */

btnPlay.addEventListener("click", controls.countDown);
btnStop.addEventListener("click", controls.hold);
btnMoreFiveMinutes.addEventListener("click", controls.MorefiveMinutes);
btnLessFiveMinutes.addEventListener("click", controls.lessfiveMinutes);

/* Dark Mode */

btnDarkMode.addEventListener("click", controls.darkMode);
btnWhiteMode.addEventListener("click", controls.whiteMode);

/* volume controls */


volumeFlorest.addEventListener("input",() =>{
    sound.buttonFlorestPressAudio.volume = volumeFlorest.value
})

volumeCoffe.addEventListener("input",() =>{
    sound.buttonCoffePressAudio.volume = volumeCoffe.value
})

volumeRain.addEventListener("input",() =>{
    sound.buttonRainPressAudio.volume = volumeRain.value
})

volumeFire.addEventListener("input",() =>{
    sound.buttonFirePressAudio.volume = volumeFire.value
})

