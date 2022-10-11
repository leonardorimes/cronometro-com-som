export default function () {
    
    const buttonFlorestPressAudio = new Audio("../sounds/Florest.wav");
    const buttonRainPressAudio = new Audio("../sounds/rain.wav");
    const buttonCoffePressAudio = new Audio("../sounds/coffe.wav");
    const buttonFirePressAudio = new Audio("../sounds/fire.wav");

   

    function pressButton(typeSound){
        typeSound.play();
        typeSound.loop = true;
    }



    function removeSoundActive(sdn1, sdn2, sdn3){
        sdn1.pause();
        sdn2.pause();
        sdn3.pause();
    }

            


    return{
        buttonFlorestPressAudio,
        buttonRainPressAudio,
        buttonCoffePressAudio,
        buttonFirePressAudio,
        pressButton,
        removeSoundActive,
      
    }


}