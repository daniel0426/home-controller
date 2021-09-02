const images  = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', ()=> {
        const subControlBox = image.childNodes[5];
        subControlBox.classList.toggle('lightingSubShowing');
        subControlBox.addEventListener('click', (e)=> {
            e.stopPropagation();
        })   
    })
})



