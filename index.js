document.addEventListener('DOMContentLoaded', function() {


  var maxNumber = 10;
  var randomNumber;
  var number;

  function randomNumbers(){
    randomNumber = Math.ceil(Math.random()*maxNumber);
  }
    randomNumbers();
    console.log(`outside  ${randomNumber}`);



  document.getElementById("guess").addEventListener("submit", function(event){
    event.preventDefault();
    var userInput = document.getElementById("input").value;
    var number = parseInt(userInput);

    document.getElementById("input").value="";

    console.log(`This is the parsed numb ${number}`);

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

    checkStatus(number);

});






  //
  // document.querySelector("input").addEventListener("submit", function(event){
  //   event.preventDefault();
  //   var guess = document.querySelector("input").value;
  //   console.log(`${guess} is the input guess.`);
  //   checkStatus(guess);
  // });
  //
  //
  // console.log(`Random number ${randomNumber}`);
  //
  // checkStatus(guessNumber);








});
