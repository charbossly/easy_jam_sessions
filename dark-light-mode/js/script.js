let body = document.querySelector('body');
let btnSwitch = document.getElementById('btn-switch');
let darkMode = localStorage.getItem('darkMode');


const enableDarkMode = () =>{
    body.classList.add('dark');
    btnSwitch.classList.replace('fa-moon','fa-sun');
    localStorage.setItem('darkMode','enabled');
}

const disableDarkMode = () =>{
    body.classList.remove('dark');
    btnSwitch.classList.replace('fa-sun','fa-moon');
    localStorage.removeItem('darkMode');
}

if(darkMode=="enabled"){
    enableDarkMode(); 
}

btnSwitch.addEventListener('click',()=>{
    darkMode = localStorage.getItem('darkMode');
    if(darkMode == "enabled"){
       disableDarkMode();
    }else{
        enableDarkMode();
    }
})