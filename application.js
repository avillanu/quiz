var questions = [{question: "What is the capital of the US", choices: ["Washington DC", "NYC", "Silicon Valley"], correct:0}];

function Question(question, choices, correct){
	this.question = question;
	this.choices = choices;
	this.correct = correct;
}
Question.prototype.sayQuestion = function(){
return this.choices;
};

$(document).ready(function(){
document.getElementById('new').innerHTML = 'initial';
var question1 = new Question("What is the capital of the US", ["Washington DC", "NYC", "Silicon Valley"], 0);
question1.sayQuestion();
var storage = question1.sayQuestion();
for(var counter = 0; counter < 3; counter++){
var radio = document.createElement("input");
	radio.type = 'radio';
	radio.name = 'abc';
	radio.id = 'abc';
	radio.value = 'aaa';
	var storage = question1.sayQuestion();
	radio.onclick = function(){alert(storage[counter])};
	document.getElementById('new').appendChild(radio);
}
});

function SelectAnswer() {
chosen ="";
var radioElements = document.getElementsByName("abc");
for(var i=0; i < radioElements.length; i++)
{
    if(radioElements[i].checked) 
    {
        alert("blah..");
        break;
    }
}
}