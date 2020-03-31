// imports
import { isYes } from './is-yes.js';

const quizButton = document.getElementById('quiz-button');
const resultsPara = document.getElementById('results');

// track friend points
let friendPoints = 0;

// function to add points
function addPoints(response) {
    isYes(response) ? friendPoints++ : friendPoints--;
}

// alert funtion

const quizPopups = () => {
    // begin quiz
    alert(`Here's the quiz!`);

    // ask for name, store as variable
    const name = prompt(`What's your name?`);

    // ask to confirm before proceeding
    const confirmation = confirm(`So, ${name}, you want to be my friend?`);
    if (confirmation !== true) {
        return;
    }

    // three yes/no questions
    const answerA = prompt(`Do you like karaoke?`);
    addPoints(answerA);

    const answerB = prompt(`Do you like dogs?`);
    addPoints(answerB);
    
    const answerC = prompt(`Do you like to party?`);
    addPoints(answerC);

    // generate resulting text based on answers
    let result = '';
    if (friendPoints === 3) {
        result = `You scored ${friendPoints}/3 Friend Points! Hell yeah, ${name}, let's party!`;
    } else if (friendPoints >= 0) {
        result = `You scored ${friendPoints}/3 Friend Points! We may not be a perfect fit, ${name}, but I'm sure we can figure it out.`;
    } else {
        result = `You scored ${friendPoints}/3 Friend Points! We may not get along, but you keep doing you, ${name}!`;
    }

    // alert that quiz is complete
    alert(`Quiz complete! See your results under the button.`);

    // write to page
    resultsPara.textContent = result;

    // reset friend points for subsequent clicks
    friendPoints = 0;
};

quizButton.addEventListener('click', quizPopups);