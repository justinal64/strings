// String entered
var stringEntered = document.getElementById("stringEntered");
var test;
/*Implement the logic in the reversal function that reverses the order of the
characters in the string, and outputs the result in the DOM, below the text input.*/
function reversal() {
    test = parseInt(stringEntered.value);
    console.log("why is this running");
    // console.log(parseInt(stringEntered.value));

}
/*Implement the logic in the alphabits function that return the characters in alphabetical
order, and outputs the result in the DOM, below the text input.*/
function alphabits() {

}
/*
Implement the logic in the palindrome function that determine whether the string is a palindrome.
If it is, display the text "Your string is a palidrome" in the DOM, below the text input.*/
function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);





// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// document.getElementById("submit").addEventListener("click", reversal);

// The output of each of the functions should immediately appear as well.