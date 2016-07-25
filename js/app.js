//Header: Title
//section: fieldset with radio buttons(binary), 5 different ones
var i = 0;
// var myArr = [q1, q2, q3, q4, q5];

function QuestionConstructor(question, ingredients) {
	this.question = question;
	this.ingredients = ingredients
}

// var q1ingredients = ["ing1", "ing2", "ing3"];
var q1 = new QuestionConstructor("q1", ["ing1a", "ing2a", "ing3a"]);
var q2 = new QuestionConstructor("q2", ["ing1b", "ing2b", "ing3b"]);
var q3 = new QuestionConstructor("q3", ["ing1c", "ing2c", "ing3c"]);
var q4 = new QuestionConstructor("q4", ["ing1d", "ing2d", "ing3d"]);
var q5 = new QuestionConstructor("q5", ["ing1e", "ing2e", "ing3e"]);

var questionsArray = [q1, q2, q3, q4, q5];
// q1.ingredients = ["ing1", "ing2", "ing3"];
console.log(q1);

var preferenceArray = [];

$('.question-section').click(function() {
	var j = Math.floor(Math.random() * 3);
	var responseValue = $('input[name=response]:checked').val();
	console.log("Response value is " + responseValue);
	if (responseValue == "yes") {
		var ingredientValue = questionsArray[i].ingredients[j];
		console.log("The ingredient is " + ingredientValue);
		preferenceArray.push(ingredientValue);
		console.log("Here is the preference array: " + preferenceArray);
	}
	i++;
	$('#q').text(questionsArray[i].question);
});


	//figure out constructors
	//for each question: an object that contains an array of ingredients
		//radio button: on click, assigns a property to the future drink
			//add to empty array? object? if object, another constructor
//submit button 	
	//on click, assemble drink and return to output div
//display div showing drink output



