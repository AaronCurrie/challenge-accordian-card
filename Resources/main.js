/*

const question0 = document.getElementById('question0');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');

const answer0 = document.getElementById('answer0');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

const arrow0 = document.getElementById('arrow0');
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');

let clicked0 = false;
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;

function close() {
    answer0.style.display = 'none';
    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    answer4.style.display = 'none';
}

function noFont() {
    question0.style.fontWeight = "400";
    question1.style.fontWeight = "400";
    question2.style.fontWeight = "400";
    question3.style.fontWeight = "400";
    question4.style.fontWeight = "400";
}

function unclickall() {
    clicked0 = false;
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
}

function rotateBack() {
    arrow0.style.transform = 'rotate(0deg)';
    arrow1.style.transform = 'rotate(0deg)';
    arrow2.style.transform = 'rotate(0deg)';
    arrow3.style.transform = 'rotate(0deg)';
    arrow4.style.transform = 'rotate(0deg)';
}

function click(answer, question, arrow) {
    answer.style.display = 'block';
    question.style.fontWeight = "700";
    arrow.style.transform = 'rotate(180deg)';       
}   

function unclick(answer, question) {
    answer.style.display = 'none';
    question.style.fontWeight = "400";
}


question0.addEventListener('click', function() {
    close();
    noFont();
    if(clicked0 === false) {
        rotateBack();
        click(answer0, question0, arrow0);
        unclickall();
        clicked0 = true; 
    } else if(clicked0 === true) {
        unclick(answer0, question0, arrow0);
        unclickall();
        rotateBack();
    }
} )

question1.addEventListener('click', function() {
    close();
    noFont();
    if(clicked1 === false) {
        rotateBack();
        click(answer1, question1, arrow1);
        unclickall();
        clicked1 = true;   
    } else if(clicked1 === true) {
        unclick(answer1, question1);
        unclickall();
        rotateBack();
    }
} )

question2.addEventListener('click', function() {
    close();
    noFont();
    if(clicked2 === false) {
        rotateBack();
        click(answer2, question2, arrow2);
        unclickall();
        clicked2 = true;   
    } else if(clicked2 === true) {
        unclick(answer2, question2);
        unclickall();
        rotateBack();
    }
} )

question3.addEventListener('click', function() {
    close();
    noFont();
    if(clicked3 === false) {
        rotateBack();
        click(answer3, question3, arrow3);
        unclickall();
        clicked3 = true;   
    } else if(clicked3 === true) {
        unclick(answer3, question3);
        unclickall();
        rotateBack();
    }
} )

question4.addEventListener('click', function() {
    close();
    noFont();
    if(clicked4 === false) {
        rotateBack();
        click(answer4, question4, arrow4);
        unclickall();
        clicked4 = true;   
    } else if(clicked4 === true) {
        unclick(answer4, question4);
        unclickall();
        rotateBack();
    }
} )

*/

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