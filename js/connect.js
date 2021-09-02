const progressNum = document.querySelector('.progress-num');
const progressImg = document.querySelector('.progress__container img');

console.log(progressImg);
window.addEventListener('load', ()=> {
    progress = 0;
    setInterval(() => {
        if(progress > 96){
            window.location = 'home.html';
            return;
        }
        progress+=4;
        progressNum.innerText = `${progress} %`;
        
    }, 200);
})