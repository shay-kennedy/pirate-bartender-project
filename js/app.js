//Header: Title
//section: fieldset with radio buttons(binary), 5 different ones
var i = 0;
var myArr = ["q1", "q2", "q3", "q4", "q5"];

$('.question-section').click(function() {
	i++;
	$('#q').text(myArr[i]);
});
	//figure out constructors
	//for each question: an object that contains an array of ingredients
		//radio button: on click, assigns a property to the future drink
			//add to empty array? object? if object, another constructor
//submit button 	
	//on click, assemble drink and return to output div
//display div showing drink output