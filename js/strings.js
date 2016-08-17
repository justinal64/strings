// String entered
var stringEntered;
var submit = document.getElementById("submit");
var reverseValue = document.getElementById("reverseValue");
var palindromeValue = document.getElementById("palindromeValue");
var alphaValue = document.getElementById("alphaValue");
var revStringEntered = "";
var alphaArray = [];
var counter = 0;
var asciiValue;

/*Implement the logic in the reversal function that reverses the order of the
characters in the string, and outputs the result in the DOM, below the text input.*/
function reversal(a) {
    revStringEntered = "";
    for(var i = (a.length - 1); i >= 0; i--) {
        revStringEntered += a[i];
    }
    return revStringEntered;
}
/*Implement the logic in the alphabits function that return the characters in alphabetical
order, and outputs the result in the DOM, below the text input.*/
function alphabits() {
    for(var i = 0; i < stringEntered.length; i++) {
        alphaArray[i] = stringEntered[i];
    }
    return alphaArray.sort();
}
/*
Implement the logic in the palindrome function that determine whether the string is a palindrome.
If it is, display the text "Your string is a palidrome" in the DOM, below the text input.*/
function palindrome(og) {
    var rev = reversal(og);
    if(rev === og) {
        return "yes";
    } else {
        return "no";
    }
}

// This functions checks for chars ONLY
function validateInput(og) {
    for(var i = 0; i < og.length; i++) {
        asciiValue = og.charCodeAt(i); // gets the ascii value of each char
        // if the value is NOT an uppercase or lowercase number return false
        if(!(asciiValue >= 97 && asciiValue <= 122 || asciiValue >= 65 && asciiValue <= 90)) {
            return false;
        }
    }
    return true;
}

function runProgram() {
    stringEntered = document.getElementById("stringEntered").value;
    if(validateInput(stringEntered)) {
        reverseValue.value = reversal(stringEntered);
        palindromeValue.value = palindrome(stringEntered);
        alphaValue.value = alphabits(stringEntered);
    } else {
        alert("Sorry you entered an illegal char");
    }
}

// checks for enter pressed
document.getElementById('stringEntered').onkeypress = function(e){
input1.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        validateInput();
    }
});
}
