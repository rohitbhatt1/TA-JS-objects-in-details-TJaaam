let next = document.querySelector('.next');
let prev = document.querySelector('.pre');
let quizElm = document.querySelector('.quiz');
let result = document.querySelector('.result');
let total = document.querySelector('p');

class Questions{
   constructor(title, options, CorrectAnswerIndex){
    this.title = title;
    this.options = options;
    this.CorrectAnswerIndex = CorrectAnswerIndex;
  }

  isCorrectAnsWer(){
    return this.options[this.CorrectAnswerIndex] === answer;
  }

  getCorrectAnswer(){
    return this.options[this.CorrectAnswerIndex];
  }

}


class Quiz {
     constructor(questions=[], score = 0){
        this.questions = questions;
        this.score = score;
        this.activeIndex = 0;
     }
   incrementScore(){
    this.score = this.score + 1;
    return this.score;
   }
        
   
    
}

