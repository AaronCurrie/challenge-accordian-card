
const items = [...document.querySelectorAll('article')]

function closeAll(array) {
    array.forEach(item => {
            item.querySelector('.answer').style.display = 'none'
            item.querySelector('.question').children[0].style.fontWeight = "400";
            item.querySelector('img').style.transform = 'rotate(0deg)';
            item.classList.remove('active');
        });
}

function close(array) {
    array.forEach(item => {
            item.querySelector('.answer').style.display = 'none'
            item.querySelector('.question').children[0].style.fontWeight = "400";
            item.querySelector('img').style.transform = 'rotate(0deg)';
        });
}

items.forEach(item => {
    item.addEventListener('click', (e) => {
        closeAll(items);
        const clickedItem = e.target.closest('article');
        const itemAnswer = clickedItem.querySelector('.answer');
        const itemQuestion = clickedItem.querySelector('.question').children[0];
        const itemArrow = clickedItem.querySelector('img');
        const clickedItemActive = clickedItem.classList.contains('active');
        itemAnswer.style.display = 'block';
        itemQuestion.style.fontWeight = "700";
        itemArrow.style.transform = 'rotate(180deg)';
        clickedItem.classList.add('active');
        if(clickedItemActive) {
            closeAll(items)
        }
    })
})
