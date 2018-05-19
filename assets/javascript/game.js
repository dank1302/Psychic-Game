
alert('Click ok and press any letter key you wish to begin.')
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
console.log("Wins: " + wins + " Losses: " + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft --;
    }
    if (letterToBeGuessed == userGuess) {
		wins++;
		alert("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }
    if (guessesLeft == 0) {
		losses++;
		alert("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }
    var html = "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" + "<p><h3>Your guesses so far: " + guessesSoFar + "</h3></p>";
	
	document.querySelector("#game").innerHTML = html;

}
    
