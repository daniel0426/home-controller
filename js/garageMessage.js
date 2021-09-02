const messagePopupBtn = document.querySelectorAll('.garage-control');
const body = document.querySelector('body');
messagePopupBtn.forEach(item=> {
    item.addEventListener('click', ()=> {
        let messageContent;
        let color;
        if(item.classList.contains('up')){
            messageContent = 'Your garage door is opening now';
            color = '#008000';
        }else {
            messageContent = 'Your garage door is closing now';
            color= '#FF0000';

        }
        const messageBox = document.createElement('div');
        const message = document.createElement('p');
        
        messageBox.setAttribute('class', 'messageShow');
        message.innerText = `${messageContent}`;

        body.append(messageBox)
        messageBox.append(message);
        messageBox.style.position="absolute";
        messageBox.style.width= '100%';
        messageBox.style.height = '100%';
        messageBox.style.top=0;
        messageBox.style.left=0;
        messageBox.style.display='flex';
        messageBox.style.justifyContent='center';
        messageBox.style.alignItems='center';
        messageBox.style.backgroundColor='rgba(29,31,33,.90)';
        message.style.color= `${color}`;
        message.style.border="2px solid white";
        message.style.padding = '0.5em 1em ';
        message.style.fontSize= '1.3em';
        setTimeout(()=> {
            messageBox.remove();
        },4000)
        
        

    })
})