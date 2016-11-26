var attempts = 10;
var wins = 0;
var losses = 0;
var words =["mean girls", "clueless", "wedding crashers", "old school"];
var randomWord = words[Math.floor(Math.random() * words.length)].split("");
var displayBlank = [];
for (var i = 0; i < randomWord.length; i++){
  displayBlank.push("_");
}
var remainingLetters = randomWord.length;
  console.log(randomWord);




// var displayBlank = [];
// var wordBlank = new Array (randomWord.length);
// for (var i = 0; i < wordBlank.length; i++){
//   displayBlank = wordBlank.join(" _ ");
// }
// console.log(wordBlank);


document.getElementById("randomWordGenerated").innerHTML = displayBlank.join(" ");
console.log(displayBlank);

var lettersGuessed = [];

for (var j = 0; j < randomWord.length; j++){

document.onkeyup = function (event){
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   lettersGuessed.push(userGuess);

    document.getElementById("firstGuess").innerHTML = lettersGuessed.join(" ");

    console.log(lettersGuessed);

    // if(randomWord[j] === userGuess){
   if (randomWord.indexOf(userGuess) > -1){
        displayBlank[j] = userGuess;
        alert("Correct!");
        document.getElementById("randomWordGenerated").innerHTML = displayBlank.join(" ");

   }
   else{
      alert("Wrong!");
      attempts--;
      document.getElementById("counter").innerHTML = attempts;
   }

}
}



   // guess = prompt("What is your guess?");


//   document.getElementById("randomWordGenerated").innerHTML = lettersGuessed;


// // var lettersGuessed = [];


//     for (var i = 1; i < randomWord.length; i++) {


//     document.getElementById("guessedLetters").innerHTML = userGuess;
//     console.log(userGuess);
//     console.log(guess);

















