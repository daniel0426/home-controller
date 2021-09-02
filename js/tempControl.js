const temp = document.querySelector('.wantedTemp');
const humid = document.querySelector('.wantedHumid');
const tempInput = document.querySelectorAll('.temp-control__box input');
const humidInput = document.querySelectorAll('.hmd-control__box input ');

function sliderTempChange(val){
   temp.innerText = `${val}°C`;
}
function sliderHmdChange(val){
    humid.innerText = `${val} %`;
 }

 function showingUp(){
     const controlBox = document.querySelectorAll('.mainControl');

     controlBox.forEach(item => {
         item.addEventListener('click', ()=> {
             item.classList.toggle('showing');
             item.childNodes[5].addEventListener('click', (e)=> {
                 e.stopPropagation();
             })
         })
         
     })
 }
 showingUp();