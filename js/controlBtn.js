const changeBtnStyle = document.querySelectorAll('.click');

changeBtnStyle.forEach(item => {
    item.addEventListener('click', ()=> {
        item.classList.toggle('active');
    })
})