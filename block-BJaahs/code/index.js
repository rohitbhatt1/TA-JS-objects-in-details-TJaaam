const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };
//Without object.

let title = 'Where is the capital of Jordan';
let options= ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function  isAnswerCorrect(index) {
    if(index === correctAnswerIndex){
        return true;
    } else{
        return false;
    }
}

function  getAnswerCorrect(index) {
  return options[correctAnswerIndex];
}


// Organize using object

let quizSolve = {
    title:'Where is the capital of Jordan',
    options:['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
    return quizSolve.options[quizSolve.correctAnswerIndex];
    },
     getCorrectAnswer(index) {
       return index = quizSolve.correctAnswerIndex;
    },
}


// Use a function to create object.
function quizApp(title,options,correctAnswerIndex){
    let user = {};
    user.title = title;
    user.options =Option;
    user.correctAnswerIndex = correctAnswerIndex;

    user.isAnswerCorrect = function (index) {
      return user.options[user.correctAnswerCorrect];
    },
   user.getCorrectAnswer = function (index){
       return index === user.correctAnswerIndex;
   };
    return user;
}
 
// const testData = quizApp('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
// testData.getCorrectAnswer(1);
// true


//Convert the function to use `this` keyword
function quizApp(title,options,correctAnswerIndex){
    let user = {};
    user.title = title;
    user.options =Option;
    user.correctAnswerIndex = correctAnswerIndex;

    user.isAnswerCorrect = function (index) {
      return this.options[this.correctAnswerCorrect];
    },
   user.getCorrectAnswer = function (index){
       return index === this.correctAnswerIndex;
   };
    return user;
}
// const testData = quizApp('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
// testData.getCorrectAnswer(1);

//Write Test By creating to objects also test both tests;

// let questionOne  = createQuestion(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );
// let questionTwo = createQuestion(
//     "What is the capital of India ",
//     ['New Delhi','Uttar Pradesh','Chandigarh'],
//     1
// );


