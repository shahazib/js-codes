// 1. Take two user inputs for first and last name, merge them, and greet the user.
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// 2. Take user input about favorite mobile phone model and display the length.
let mobileModel = prompt("Enter your favorite mobile phone model:");
document.write("Your favorite mobile model is: " + mobileModel + "<br>");
document.write("Length of input: " + mobileModel.length + "<br>");

// 3. Find the index of letter "n" in the word "Pakistani"
let word = "Pakistani";
let indexN = word.indexOf("n");
document.write("Index of 'n' in 'Pakistani': " + indexN + "<br>");

// 4. Find the last index of letter "l" in the word "Hello World"
let phrase = "Hello World";
let lastIndexL = phrase.lastIndexOf("l");
document.write("Last index of 'l' in 'Hello World': " + lastIndexL + "<br>");

// 5. Find the character at the 3rd index in the word "Pakistani"
let charAtThirdIndex = word.charAt(3);
document.write("Character at 3rd index in 'Pakistani': " + charAtThirdIndex + "<br>");

// 6. Repeat Q1 using the concat() method.
let fullNameConcat = firstName.concat(" ", lastName);
alert("Hello, " + fullNameConcat + "!");

// 7. Replace "Hyder" with "Islam" in the word "Hyderabad"
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("City after replacement: " + newCity + "<br>");

// 8. Replace all occurrences of "and" with "&"
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("Updated message: " + newMessage + "<br>");

// 9. Convert string "472" to number 472
let str = "472";
let num = Number(str);
document.write("String: " + str + "<br>Type: " + typeof str + "<br>");
document.write("Converted to number: " + num + "<br>Type: " + typeof num + "<br>");

// 10. Convert user input to capital letters
let userInput = prompt("Enter some text:");
let upperCaseInput = userInput.toUpperCase();
document.write("Upper case: " + upperCaseInput + "<br>");

// 11. Convert user input to title case
let titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
document.write("Title case: " + titleCaseInput + "<br>");

// 12. Convert num to string and remove the dot
let numWithDot = 35.36;
let numString = numWithDot.toString().replace(".", "");
document.write("Converted number without dot: " + numString + "<br>");

// 13. Validate username (no special characters [@ . , !] allowed)
let username = prompt("Enter your username:");
let isValid = true;
for (let i = 0; i < username.length; i++) {
    let code = username.charCodeAt(i);
    if (code === 33 || code === 44 || code === 46 || code === 64) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Invalid username. Please avoid special characters [@ . , !].");
} else {
    alert("Username is valid.");
}

// 14. Case-insensitive search in an array of items
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("What do you want to search for?").toLowerCase();
let found = items.some(item => item.toLowerCase() === searchItem);
if (found) {
    alert(searchItem + " is available in the list.");
} else {
    alert(searchItem + " is not available.");
}

// 15. Password validation (must contain letters and numbers, not start with a number, and be at least 6 characters long)
let password = prompt("Enter your password:");
let hasLettersAndNumbers = /[A-Za-z]/.test(password) && /[0-9]/.test(password);
let startsWithLetter = isNaN(password.charAt(0));
if (!hasLettersAndNumbers || !startsWithLetter || password.length < 6) {
    alert("Invalid password! Must contain letters and numbers, not start with a number, and be at least 6 characters long.");
} else {
    alert("Password is valid.");
}

// 16. Convert the string "University of Karachi" to an array
let university = "University of Karachi";
let universityArray = university.split(" ");
universityArray.forEach(element => document.write(element + "<br>"));

// 17. Display the last character of a user input
let input = prompt("Enter a word or sentence:");
let lastChar = input.charAt(input.length - 1);
document.write("Last character: " + lastChar + "<br>");

// 18. Count occurrences of the word "the" in a sentence (case-insensitive)
let sentence = "The quick brown fox jumps over the lazy dog";
let countThe = (sentence.match(/the/gi) || []).length;
document.write("Number of occurrences of 'the': " + countThe + "<br>");


// 1. Take a positive integer from the user and display the number, round, floor, and ceil values.
let positiveNumber = parseFloat(prompt("Enter a positive integer:"));
document.write("Number: " + positiveNumber + "<br>");
document.write("Round off value: " + Math.round(positiveNumber) + "<br>");
document.write("Floor value: " + Math.floor(positiveNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveNumber) + "<br><br>");

// 2. Take a negative floating point number from the user and display the number, round, floor, and ceil values.
let negativeNumber = parseFloat(prompt("Enter a negative floating point number:"));
document.write("Number: " + negativeNumber + "<br>");
document.write("Round off value: " + Math.round(negativeNumber) + "<br>");
document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br><br>");

// 3. Display the absolute value of a number.
let number = parseFloat(prompt("Enter a number to find its absolute value:"));
document.write("Absolute value of " + number + " is " + Math.abs(number) + "<br><br>");

// 4. Simulate a dice roll using Math.random().
let diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
document.write("Dice roll value: " + diceRoll + "<br><br>");

// 5. Simulate a coin toss using Math.random().
let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("Coin toss result: " + coinToss + "<br><br>");

// 6. Show a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
document.write("Random number between 1 and 100: " + randomNumber + "<br><br>");

// 7. Ask the user about their weight and display it.
let userWeight = prompt("Enter your weight:");
let parsedWeight = parseFloat(userWeight);
document.write("Your weight is: " + parsedWeight + " kilograms<br><br>");

// 8. Store a random secret number from 1 to 10 and ask the user to guess it.
let secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
let userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the correct number: " + secretNumber + "<br>");
} else {
    document.write("Sorry, the secret number was: " + secretNumber + "<br>");
}
