// JavaScript Document

const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementbyId('result');
const correctAnswers = ['c', 'd', 'b','d','c','b'];

quizForm.addEventListener('submit', e=>{e.preventDefault();

let score=0;
const userAnswers = [quizForm.q1.value, quizform.q2.value];
userAnswers.forEach((answer, index)) == {
	if(answer===correctAnswers[index]){
		score += 1;
	}}

resultDiv.innerHTML ='Your score is $(score)/$(correctAnswers.length)';
});										
