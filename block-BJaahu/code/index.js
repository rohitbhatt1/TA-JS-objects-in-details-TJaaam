// let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion = new Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );


// Prototypal pattern

let quizMethods = {
    isAnswerCorrect : function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer : function(){
        return this.options[this.correctAnswerIndex];
    }
};

function createQuiz(title,options,correctAnswerIndex){
    let question = Object.create(quizMethods); // goes down the __proto__ chain and finds the methods
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    return question;
}

let firstQuestion = createQuiz(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);



// Pseudoclassial Pattern

CreateQuiz.prototype = {
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
};

function CreateQuiz(title,options,correctAnswerIndex){
    // let question = Object.create(createQuiz.prototype);
    
    // this = {} created by new automatically
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;

    // return question; done by new automatically
}

let FirstQuestion = new CreateQuiz(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
)

firstQuestion.isAnswerCorrect(1) // true
firstQuestion.getCorrectAnswer() //"Amaan"



// class Patterns

class Question{
    constructor(titles,options,correctAnswerIndex){
        this.title = title;
        this.options =options;
        this.correctAnswerIndex =correctAnswerIndex;
    }
    isCorrectAnswer(index) {
        return index === this.correctAnswerIndex;
    }
    isCorrectIndex(option){
        return this.options[this.correctAnswerIndex]
    }

}


// Test Cases
// firstQuestion.isAnswerCorrect(1) // true
// firstQuestion.isAnswerCorrect(2) // false
// firstQuestion.getCorrectAnswer() // "Amaan"

let secondQuestion = new Quiz(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);



  // Create using class pattern

//   class CreateQuestion{
//     constructor(title,options,correctAnswerIndex){
//         this.title;
//         this.options;
//         this.correctAnswerIndex;
//     }
//     isAnswerCorrect(index) {
//       if (index === this.correctAnswerIndex) {
//         return true;
//       }
//       return false;
//     }
//     getCorrectAnswer() {
//       return this.options[this.correctAnswerIndex];
//     }
// }

// // Test
// let secondQuestion2 = new createQuestion(
//   'Where is the capital of Jordan',
//   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   1
// );