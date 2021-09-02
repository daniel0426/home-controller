

const time = document.querySelector('.time');

function timeShow(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let end = 'AM'
    if(hour < 10) {
        hour = `0${hour}`
    }else if(hour>=12){
        end = "PM"
    }
    if(minute<10) {
        minute = `0${minute}`;
    }
    time.innerText = `${hour}:${minute} ${end} `;
    
}
timeShow();