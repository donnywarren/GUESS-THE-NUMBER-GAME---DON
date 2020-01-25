document.addEventListener('DOMContentLoaded', function() {


  // Attach a “submit” event listener to the form and grab the value of the input. Make
  // sure to convert the value of the input to a number with the below method
  // a. parseInt(value)

  var maxNumber = 10;
  var randomNumber = Math.ceil(Math.random()*maxNumber);

  document.querySelector("input").addEventListener("submit", function(event){
    event.preventDefault();
    var guess = document.querySelector("input").value;
    console.log(`${guess} is the input guess.`);
    checkStatus(guess);
  });


  console.log(`Random number ${randomNumber}`);

  checkStatus(guessNumber);

  function checkStatus(number) {
    if(isNaN(number)){
      console.log("You must enter a number.");
    } else if(number < 1 || number > 10){
      console.log("You must guess a number between 1 and 10.");
    } else if(number > randomNumber){
      console.log(`The number you seek is less than ${number}`);
    } else if(number < randomNumber){
      console.log(`The number you seek is greater than ${number}`);
    } else if(number === randomNumber){
      console.log(`You win! ${number} is the right nubmer!`)
    }

  }








});
