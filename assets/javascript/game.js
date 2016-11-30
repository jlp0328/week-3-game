
var words =["mean girls", "clueless", "wedding crashers", "old school"];
var randomWord = words[Math.floor(Math.random() * words.length)].split("");
var displayBlank = [];
for (var i = 0; i < randomWord.length; i++){
  displayBlank.push("_");
}

var attempts = randomWord.length;
var wins = 0;

document.getElementById("tries").innerHTML = attempts;

document.getElementById("randomWordGenerated").innerHTML = displayBlank.join(" ");
document.getElementById("correctGuesses").innerHTML = "Times Guessed Correctly: "+ wins;

    console.log(randomWord);
    console.log(displayBlank);

var lettersGuessed = [];

document.onkeyup = function (event){
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   lettersGuessed.push(userGuess);
   document.getElementById("firstGuess").innerHTML = lettersGuessed.join(" ");
   console.log(lettersGuessed);

      attempts--;
      console.log(attempts);

// If variable guessed is in the random word, then replace character in array and print to screen.
  for (var j = 0; j < randomWord.length; j++){

    if(userGuess === randomWord[j]){
      displayBlank[j] = randomWord[j];
      wins++;
      console.log("wins");
      console.log("displayBlank is " + displayBlank);
      console.log("userGuess is " + userGuess);
      document.getElementById("tries").innerHTML = attempts;
      document.getElementById("randomWordGenerated").innerHTML = displayBlank.join(" ");
      document.getElementById("correctGuesses").innerHTML = "Times Guessed Correctly: "+ wins;
    }

     else{
      document.getElementById("tries").innerHTML = attempts;
   }

}
}

//Game needs to end when the maximum guesses have been reached OR the word has been guessed.















