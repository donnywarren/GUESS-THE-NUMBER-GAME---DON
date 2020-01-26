document.addEventListener('DOMContentLoaded', function() {


  var maxNumber = 10;
  var randomNumber;

  function randomNumbers(){
    randomNumber = Math.ceil(Math.random()*maxNumber);
  }
    randomNumbers();
    console.log(`MAGIC NUMBER = ${randomNumber}`);


  document.getElementById("guess").addEventListener("submit", function(event){
    event.preventDefault();
    var userInput = document.getElementById("input").value;
    var number = parseInt(userInput);

    document.getElementById("input").value="";

    function checkStatus(number) {
      if(isNaN(number)){
        message = "You must enter a number.";
      } else if(number < 1 || number > 10){
        message = "You must guess a number betweeen 1 and 10.";
      } else if(number > randomNumber){
        message = `The number you seek is less than ${number}.`;
      } else if(number < randomNumber){
        message = `The number you seek is greater than ${number}.`;
      } else if(number === randomNumber){
        var winLi = document.createElement("li");
        winLi.className = "win";
        winLi.innerHTML = `YOU WIN!!!<br/>${number} is the right number!`;
        document.getElementById("hints").appendChild(winLi);
        return;
      }

      function hintContent() {
        var newLi = document.createElement("li");
        newLi.innerHTML = message;
        document.getElementById("hints").appendChild(newLi);
      }
      hintContent();
    }
    checkStatus(number);

    var count = document.getElementById("hints").childElementCount;
    document.getElementById("number-of-guesses").innerHTML = count;

  });
});
