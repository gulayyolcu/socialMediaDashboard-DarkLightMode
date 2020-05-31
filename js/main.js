const colorSwitch=document.querySelector('.modeToggle').querySelector('#input-color-switch');

colorSwitch.addEventListener('click',checkMode);

function checkMode(){
    if(colorSwitch.checked){
        console.log('Dark on');
        darkModeOn();
    }
    else{
        console.log('Dark off');
        darkModeOff();
    }
}

function darkModeOn(){
    document.body.classList.add("darkModeColor");
}

function darkModeOff(){
    document.body.classList.remove("darkModeColor");
}