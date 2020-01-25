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
        var newLi = document.createElement("li");
        newLi.innerHTML = "You must guess a number betweeen 1 and 10.";
        document.getElementById("hints").appendChild(newLi);
      } else if(number > randomNumber){
        var newLi = document.createElement("li");
        newLi.innerHTML = `The number you seek is less than ${number}.`;
        document.getElementById("hints").appendChild(newLi);
      } else if(number < randomNumber){
        var newLi = document.createElement("li");
        newLi.innerHTML = `The number you seek is greater than ${number}.`;
        document.getElementById("hints").appendChild(newLi);
      } else if(number === randomNumber){
        var newLi = document.createElement("li");
        newLi.innerHTML = `YOU WIN!!!<br/>${number} is the right number!`;
        newLi.className = "win";
        document.getElementById("hints").appendChild(newLi);
      }
    }

    checkStatus(number);

    var count = document.getElementById("hints").childElementCount;
    document.getElementById("number-of-guesses").innerHTML = count;

  });
});
