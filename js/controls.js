export default function Controls({
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

}){

    

function MorefiveMinutes() {
        minutesDisplay+=5;
     }
   
function lessfiveMinutes() {
       minutesDisplay -= 5;
   }
   
   function hold() {
    clearTimeout(timerTimeOut)
 }



function countDown(){
    hold();
    timerTimeOut = setTimeout(() => {
        
        seconds.innerHTML = String(secondsDisplay).padStart(2,'0');
        minutes.innerHTML  =String(minutesDisplay).padStart(2,'0');
        if(minutesDisplay == 0 && secondsDisplay == 0){
            return
        }
        if(secondsDisplay <= 0){
            
            minutesDisplay--;
            secondsDisplay = 60;
        }
        secondsDisplay--;
        countDown();

    }, 1000)
}

function addBtnActive(btn, classBtn){

    btn.classList.add(classBtn)
       
}

function removeBtnActive(btn1, btn2, btn3, classBtn){
    btn1.classList.remove(classBtn);
    btn2.classList.remove(classBtn);
    btn3.classList.remove(classBtn);
}

function darkMode(){
    addHide(btnDarkMode);
    removeHide(btnWhiteMode);
    elementEffects.classList.add('darkClass');
    document.body.style.backgroundColor = '#000';

    changeActiveButtonBackgroundColor(allElementsEffects, 'btnActive', 'darkClassActive');
    changeButtonBackgroundColor(allElementsEffects, "buttonBackgroundEffects", "darkButtonBackgroundEffects");
    changeControlsBackground(allElementsControls, "#C4C4CC");
    changeFillButtonBackgroundColor(allElementsEffects, "#fff");
    
    changeTimerControlsBackgroundColor(allElementsTimerDisplay, "#fff");


}
function whiteMode(){
    elementEffects.classList.remove('darkClass');
    document.body.style.backgroundColor = '#E5E5E5';
    
    addHide(btnWhiteMode);
    removeHide(btnDarkMode);    
    changeActiveButtonBackgroundColor(allElementsEffects, 'darkClassActive',  'btnActive');
    changeButtonBackgroundColor(allElementsEffects, "darkButtonBackgroundEffects", "buttonBackgroundEffects");
    changeControlsBackground(allElementsControls, "#323238");
    changeFillButtonBackgroundColor(allElementsEffects, "#000");
    changeTimerControlsBackgroundColor(allElementsTimerDisplay, "#000")
    changeTimerControlsBackgroundColor(allElementsTimerDisplay, "#000");



}

function removeHide(btn){
    btn.classList.remove('hide')
}

function addHide(btn){
    btn.classList.add('hide')
}


function changeActiveButtonBackgroundColor(arrayEffects, classBtn, addClassBtn){
    for(let ef of arrayEffects){
        if(ef.classList.contains(classBtn)){
            ef.classList.remove(classBtn)
            ef.classList.add(addClassBtn)
        }
    }
}

function changeButtonBackgroundColor(arrayEffects, classBtn, addClassBtn){
    for(let ef of arrayEffects){
        if(ef.classList.contains(classBtn)){
            ef.classList.remove(classBtn)
            ef.classList.add(addClassBtn)
        }
    }
}

function changeControlsBackground(arrayControls, color){
    for(let ef of arrayControls){
        ef.children[0].children[0].style.fill = color;
    }
}  

function changeFillButtonBackgroundColor(arrayEffects, color){
    for(let ef of arrayEffects){
        ef.children[0].children[0].style.fill = color;
    }
}

function changeTimerControlsBackgroundColor(arrayTimerDisplay, color){
    for(let td of arrayTimerDisplay){
        td.style.color = color
    }
}


return{
    MorefiveMinutes,
    lessfiveMinutes,
    hold,
    countDown,
    removeBtnActive,
    darkMode,
    whiteMode,
    addBtnActive
}

}