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

function click(answer, question,) {
    answer.style.display = 'block';
    question.style.fontWeight = "700";       
}   

function unclick(answer, question) {
    answer.style.display = 'none';
    question.style.fontWeight = "400";
}

function go(answer, question, clicked) {
    close();
    noFont();
    if(clicked === false) {
        click(answer, question);
        unclickall();
        clicked = true;   
    } else if(clicked === true) {
        unclick(answer, question);
        unclickall();
    }
}

question0.addEventListener('click', function() {
    close();
    noFont();
    if(clicked0 === false) {
        click(answer0, question0);
        unclickall()
        clicked0 = true; 
    } else if(clicked0 === true) {
        unclick(answer0, question0);
        unclickall();
    }
} )

question1.addEventListener('click', function() {
    close();
    noFont();
    if(clicked1 === false) {
        click(answer1, question1);
        unclickall();
        clicked1 = true;   
    } else if(clicked1 === true) {
        unclick(answer1, question1);
        unclickall();
    }
} )

question2.addEventListener('click', function() {
    close();
    noFont();
    if(clicked2 === false) {
        click(answer2, question2);
        unclickall();
        clicked2 = true;   
    } else if(clicked2 === true) {
        unclick(answer2, question2);
        unclickall();
    }
} )

question3.addEventListener('click', function() {
    close();
    noFont();
    if(clicked3 === false) {
        click(answer3, question3);
        unclickall();
        clicked3 = true;   
    } else if(clicked3 === true) {
        unclick(answer3, question3);
        unclickall();
    }
} )

question4.addEventListener('click', function() {
    close();
    noFont();
    if(clicked4 === false) {
        click(answer4, question4);
        unclickall();
        clicked4 = true;   
    } else if(clicked4 === true) {
        unclick(answer4, question4);
        unclickall();
    }
} )

