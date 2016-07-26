$(document).ready(function () {
  var i = 0

  var attributes = {
    STRONG: 'STRONG',
    SALTY: 'SALTY',
    BITTER: 'BITTER',
    SWEET: 'SWEET',
    FRUITY: 'FRUITY'
  }

  function Ingredient (newName) {
    this.name = newName;
  }

  function Pantry () {
    this.ingredients = {}
  }

  function Question (text, attribute) {
    this.text = text;
    this.attribute = attribute;
  }

  function Bartender (pantry, questionList) {
    this.pantry = pantry;
    this.questionList = questionList;
  }

  // function Pantry() {
  //   this.ingredients = []
  // }

  // Pantry.prototype.openPantry = function() {

  // }

  // //////////OUR IMPLEMENTATION PLANS FOR TODAY//////////
  /*
  Need methods for...
    -Adding ingredients to pantry
    -
  */

  var q1 = new Question('Do ye like yer drinks strong?', ['glug of Rum', 'slug of Whiskey', 'Splash of Gin'])
  var q2 = new Question('Do ye like it with a salty tang?', ['Olive on a stick', 'salt dusted rim', 'rasher of bacon'])
  var q3 = new Question('Are ye a lubber who likes it bitter?', ['shake of bitters', 'splash of tonic', 'twist of lemon peel'])
  var q4 = new Question('Would ye like a bit of sweetness with yer poison?', ['sugar cube', 'spoonful of honey', 'splash of cola'])
  var q5 = new Question('Are ye one for a fruity finish?', ['slice of orange', 'dash of cassis', 'cherry on top'])
  var questionsArray = [q1, q2, q3, q4, q5]
  var preferenceArray = []

  $('#q').text(questionsArray[i].question)

  $('.question-section').click(function (e) {
    e.preventDefault()

    if (i < questionsArray.length) {
      var j = Math.floor(Math.random() * 3)
      var responseValue = $('input[name=response]:checked').val()
      if (responseValue == 'yes') {
        var ingredientValue = questionsArray[i].ingredients[j]
        preferenceArray.push(ingredientValue)
      }

      i++
      if (i < questionsArray.length) {
        $('#q').text(questionsArray[i].question)
      }

      if (i === questionsArray.length) {
        $('.question-section').hide()
        $('.drink-order > p').text('Your ingredients are ' + preferenceArray.join(', ') + '.')

        if (preferenceArray.length === 0) {
          $('.drink-order > p').text('So you want some water?')
        }
      }
    }
  })
})
