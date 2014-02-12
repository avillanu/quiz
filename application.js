//setting the variables

var questions = [{question: "What is the capital of the US", choices: ["Washington DC", "NYC", "Silicon Valley"], correct:0}];
var score = 0;
var questioncount=0;
function Question(question, choices, correct){
	this.question = question;
	this.choices = choices;
	this.correct = correct;
}
var question1 = new Question("What is the capital of the US?", ["Washington DC", "NYC", "Silicon Valley"], 0);
var question2 = new Question("What is the capital of the Philippines?", ["Quezon City", "Manila", "Davao City"], 1);
var question3 = new Question("What is the capital of the UK?", ["Wales", "Scotland", "London"], 2);
var question4 = new Question("What is the capital of Germany?", ["Bavaria", "Berlin", "Alsace-Lorraine"], 1);
var question5 = new Question("What is the capital of Russia?", ["Moscow", "Stalingrad", "St Petersburg"], 0);

var questions = new Array();
questions = [question1, question2, question3, question4, question5];



//generate questions - function takes question #, retrieves data, passes information to addradiobutton function

function generateQuestion(questionnum) {
	var question = questions[questionnum].sayQuestion();
	var answers = questions[questionnum].sayAnswers();     
	var correctanswer = questions[questionnum].correctAnswer(); 
	document.getElementById('questionboard').innerHTML = '';
	document.getElementById('questionboard').innerHTML += question + "<br />";
	questionnum++;
	for(var counter = 0; counter < 3; counter++){		
	addradiobutton("radio", answers[counter], correctanswer, counter, questionnum);
}
}


//addradiobutton - takes data and builds a radio button with click functionality

function addradiobutton(type, text, correct, counter, questionnum) {
            var label = document.createElement("label");
            var element = document.createElement("input");
            //Assign different attributes to the element.
            element.setAttribute("type", type);
            element.setAttribute("value", type);
            element.setAttribute("name", type);
            element.setAttribute("div", type);
            element.setAttribute("correct", correct)
			element.setAttribute("onClick", 'pop("' + text + '",' + correct + ',' + counter + ',' + questionnum + ')' );
            label.appendChild(element);
            label.innerHTML += text;
           
            var foo = document.getElementById("questionboard");
            //Append the element in page (in span).
            foo.appendChild(label);
            foo.innerHTML += "<br />";
        }


//sayquestion, say answer - retrieve data from array

Question.prototype.sayAnswers = function(){
return this.choices;
};

Question.prototype.sayQuestion = function(){
return this.question;
};

Question.prototype.correctAnswer = function(){
return this.correct;
};

//pop checks the answer and if it is correct adds to the score. Afterwards it calls generateQuestion. 
function pop(text, correct, counter, questionnum){

	
	if (counter == correct) {
		score+=100
		document.getElementById('comment').innerHTML = 'Correct! Wow!!!';
	}

	if (counter != correct) {

		document.getElementById('comment').innerHTML = 'Incorrect. Next time!';
	}
	document.getElementById("score").innerHTML = score;
	generateQuestion(questionnum)
}
//document ready function. This calls the first question. 
$(document).ready(function(){

generateQuestion(0);
});
