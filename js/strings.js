// String entered
var stringEntered;
var submit = document.getElementById("submit");
var revStringEntered = "";
var counter = 0;
/*Implement the logic in the reversal function that reverses the order of the
characters in the string, and outputs the result in the DOM, below the text input.*/
function reversal(a) {
    // use a for loop to turn the string around?
    // length - 1 accounts for the \n char at the end
    revStringEntered = "";
    for(var i = (a.length - 1); i >= 0; i--) {
        revStringEntered += a[i];
    }
    // console.log(revStringEntered);
    return revStringEntered;
}
/*Implement the logic in the alphabits function that return the characters in alphabetical
order, and outputs the result in the DOM, below the text input.*/
function alphabits() {
    // Do some research I'm not really sure about this one
    // use the sort function???
}
/*
Implement the logic in the palindrome function that determine whether the string is a palindrome.
If it is, display the text "Your string is a palidrome" in the DOM, below the text input.*/
function palindrome(og) {
    // call reverse and check if the new string matchs the original
    var rev = reversal(og);
    // console.log("The word reversed is ", rev, "the og is ", og);
    if(rev === og) {
        console.log("Your string is a palindrome");
    }
}

function validateInput() {
    // This functions checks for chars ONLY
    // for loop that checks the ascii value of each char???

}
// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

submit.addEventListener("click", function() {
    stringEntered = document.getElementById("stringEntered").value;
    reversal(stringEntered);
    // alphabits(stringEntered);
    palindrome(stringEntered);
});



// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// document.getElementById("submit").addEventListener("click", reversal);

// The output of each of the functions should immediately appear as well.