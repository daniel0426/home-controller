const imageContainer = document.querySelectorAll('.district');
const amplifyBox = document.querySelector('#amplify')
const biggerImage = document.querySelector('#amplify-image');


imageContainer.forEach(item => {
    item.addEventListener('click', (e)=> {
        const imageSrc = e.target.getAttribute('src');
        biggerImage.setAttribute('src', `${imageSrc}`);
        amplifyBox.classList.add('visible');
        closeAmplifyBox();
    })
})

function closeAmplifyBox(){
    amplifyBox.addEventListener('click', ()=> {
        amplifyBox.classList.remove('visible');
    })
}