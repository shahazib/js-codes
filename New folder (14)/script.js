// 1. Check if input is a number, uppercase letter, or lowercase letter
function checkCharacter(char) {
    if (!isNaN(char)) {
        return 'Input is a number.';
    } else {
        let ascii = char.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            return 'Input is an uppercase letter.';
        } else if (ascii >= 97 && ascii <= 122) {
            return 'Input is a lowercase letter.';
        } else {
            return 'Input is not a valid number or letter.';
        }
    }
}

// 2. Display the larger of two integers
function compareIntegers(int1, int2) {
    if (int1 > int2) {
        return `${int1} is larger than ${int2}`;
    } else if (int2 > int1) {
        return `${int2} is larger than ${int1}`;
    } else {
        return 'Both numbers are equal';
    }
}

// 3. Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        return 'Number is positive.';
    } else if (num < 0) {
        return 'Number is negative.';
    } else {
        return 'Number is zero.';
    }
}

// 4. Check if a character is a vowel
function checkVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

// 5. Password validation
function validatePassword(password, confirmPassword) {
    if (!password) {
        return 'Please enter your password';
    } else if (password === confirmPassword) {
        return 'Correct! The password you entered matches the original password.';
    } else {
        return 'Incorrect password.';
    }
}

// 6. Fix if/else statement
function fixIfElse(hour) {
    let greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    return greeting;
}

// 7. Convert 24-hour format time to appropriate message
function convertTime(time) {
    if (time >= 0 && time < 1200) {
        return 'Good morning';
    } else if (time >= 1200 && time < 1700) {
        return 'Good afternoon';
    } else if (time >= 1700 && time < 2100) {
        return 'Good evening';
    } else if (time >= 2100 && time <= 2359) {
        return 'Good night';
    } else {
        return 'Invalid time format';
    }
}

// Example calls:
console.log(checkCharacter('A')); // Check if input is uppercase
console.log(compareIntegers(5, 10)); // Compare two integers
console.log(checkNumber(-5)); // Check if number is positive/negative/zero
console.log(checkVowel('e')); // Check if a character is a vowel
console.log(validatePassword('abc123', 'abc123')); // Validate password
console.log(fixIfElse(13)); // Fix and return greeting based on time
console.log(convertTime(1900)); // Convert 24-hour time to appropriate message

// 1. Declare an empty array using JS literal notation to store student names
let studentNames = [];

// 2. Declare an empty array using JS object notation to store student names
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let stringsArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array
let mixedArray = ["hello", 42, true, null, { name: "John" }];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications in Pakistan:</h2>");
document.write("<ul>");
qualifications.forEach(qualification => document.write(`<li>${qualification}</li>`));
document.write("</ul>");

// 8. Store 3 student names and their scores, then display the scores & percentages
let students = ["Ali", "Sara", "Ahmed"];
let scores = [450, 470, 420];
let totalMarks = 500;
for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write(`${students[i]} scored ${scores[i]} marks. Percentage: ${percentage}%<br>`);
}

// 9. Initialize an array with color names and perform various operations
let colors = ["Red", "Green", "Blue"];

// (a) Add a color to the beginning
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
document.write("<br>Updated colors (after adding to beginning): " + colors.join(", ") + "<br>");

// (b) Add a color to the end
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
document.write("Updated colors (after adding to end): " + colors.join(", ") + "<br>");

// (c) Add two more colors to the beginning
colors.unshift("Yellow", "Purple");
document.write("Updated colors (after adding two at the beginning): " + colors.join(", ") + "<br>");

// (d) Delete the first color
colors.shift();
document.write("Updated colors (after deleting first color): " + colors.join(", ") + "<br>");

// (e) Delete the last color
colors.pop();
document.write("Updated colors (after deleting last color): " + colors.join(", ") + "<br>");

// (f) Add a color at a user-defined index
let indexToAddColor = prompt("Enter the index to add a color:");
let colorToAddAtIndex = prompt("Enter the color name to add:");
colors.splice(indexToAddColor, 0, colorToAddAtIndex);
document.write("Updated colors (after adding color at index): " + colors.join(", ") + "<br>");

// (g) Delete colors at a user-defined index
let indexToDeleteColor = prompt("Enter the index to start deleting color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDeleteColor, numberOfColorsToDelete);
document.write("Updated colors (after deleting color(s)): " + colors.join(", ") + "<br>");

// 10. Sort student scores in ascending order
let studentScores = [320, 230, 480, 120];
studentScores.sort((a, b) => a - b);
document.write("<br>Sorted student scores: " + studentScores.join(", ") + "<br>");

// 11. Initialize an array with city names and copy 3 elements to another array
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(0, 3);
document.write("Selected cities: " + selectedCities.join(", ") + "<br>");

// 12. Create a single string from an array using join
let arr = ["This", "is", "my", "cat"];
let joinedString = arr.join(" ");
document.write("Joined string: " + joinedString + "<br>");

// 13. Store values in an array in FIFO order (First In First Out)
let fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
document.write("FIFO array (First In First Out): " + fifoArray.join(", ") + "<br>");
document.write("Removed: " + fifoArray.shift() + "<br>");
document.write("FIFO array after removing first: " + fifoArray.join(", ") + "<br>");

// 14. Store values in an array in LIFO order (Last In First Out)
let lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
document.write("LIFO array (Last In First Out): " + lifoArray.join(", ") + "<br>");
document.write("Removed: " + lifoArray.pop() + "<br>");
document.write("LIFO array after removing last: " + lifoArray.join(", ") + "<br>");

// 15. Store phone manufacturers in an array and display as a dropdown/select menu
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
manufacturers.forEach(manufacturer => {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
});
document.write('</select>');
