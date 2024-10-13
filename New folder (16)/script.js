// 1. Display current date and time.
let currentDate = new Date();
document.write("Current Date and Time: " + currentDate + "<br><br>");

// 2. Alert the current month in words.
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert("Current Month: " + monthNames[currentDate.getMonth()]);

// 3. Alert the first 3 letters of the current day.
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Today is: " + dayNames[currentDate.getDay()]);

// 4. Display a message “It’s Fun day” if it's Saturday or Sunday.
if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    alert("It’s Fun day");
}

// 5. Show "First fifteen days of the month" or "Last days of the month".
if (currentDate.getDate() < 16) {
    document.write("First fifteen days of the month<br><br>");
} else {
    document.write("Last days of the month<br><br>");
}

// 6. Determine the minutes since midnight, Jan. 1, 1970.
let minutesSince1970 = Math.floor((currentDate.getTime() / 1000) / 60);
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970 + "<br><br>");

// 7. Test whether it's before noon or after.
if (currentDate.getHours() < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 8. Create a Date object for the last day of the last month of 2020.
let laterDate = new Date(2020, 11, 31);
document.write("Later Date: " + laterDate + "<br><br>");

// 9. Alert the number of days past since 1st Ramadan (June 18, 2015).
let ramadanDate = new Date("June 18, 2015");
let diffTime = currentDate - ramadanDate;
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.write("Days since 1st Ramadan: " + diffDays + " days<br><br>");

// 10. Display the seconds that elapsed between the reference date and the beginning of 2015.
let referenceDate = new Date("January 1, 2015");
let elapsedSeconds = Math.floor((currentDate - referenceDate) / 1000);
document.write("Seconds since the beginning of 2015: " + elapsedSeconds + " seconds<br><br>");

// 11. Extract the hours, reset the date object an hour ahead, and display the updated date.
let currentHour = currentDate.getHours();
currentDate.setHours(currentHour + 1);
document.write("Date object an hour ahead: " + currentDate + "<br><br>");

// 12. Show the date reset to 100 years back in an alert box.
let hundredYearsBack = new Date();
hundredYearsBack.setFullYear(hundredYearsBack.getFullYear() - 100);
alert("Date 100 years back: " + hundredYearsBack);

// 13. Ask the user about their age and calculate the birth year.
let userAge = parseInt(prompt("Enter your age:"));
let birthYear = currentDate.getFullYear() - userAge;
document.write("Your birth year is: " + birthYear + "<br><br>");

// 14. Generate K-Electric bill.
let customerName = prompt("Enter your name:");
let numberOfUnits = parseFloat(prompt("Enter number of units:"));
let chargesPerUnit = 16;
let latePaymentSurcharge = 350;
let netAmountPayable = numberOfUnits * chargesPerUnit;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("K-Electric Bill<br>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + monthNames[currentDate.getMonth()] + "<br>");
document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br>");


// 1. Function to display current date & time.
function displayDateTime() {
    let currentDate = new Date();
    document.write("Current Date and Time: " + currentDate + "<br><br>");
}
displayDateTime();

// 2. Function to greet the user with full name.
function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
greetUser(prompt("Enter your first name:"), prompt("Enter your last name:"));

// 3. Function to add two numbers input by user and return the sum.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
alert("The sum is: " + addTwoNumbers(num1, num2));

// 4. Calculator function
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
document.write("Result: " + calculator(n1, n2, operator) + "<br><br>");

// 5. Function to square a number
function square(num) {
    return num * num;
}
alert("The square of 4 is: " + square(4));

// 6. Function to compute factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
}
alert("The factorial of 5 is: " + factorial(5));

// 7. Function to display counting between start and end numbers
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
let start = parseInt(prompt("Enter start number:"));
let end = parseInt(prompt("Enter end number:"));
displayCounting(start, end);

// 8. Nested function to calculate hypotenuse
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(n) {
        return n * n;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}
let base = parseFloat(prompt("Enter base of the triangle:"));
let perpendicular = parseFloat(prompt("Enter perpendicular of the triangle:"));
document.write("The hypotenuse is: " + calculateHypotenuse(base, perpendicular) + "<br><br>");

// 9. Function to calculate area of rectangle
function calculateArea(width, height) {
    return width * height;
}
// i. Arguments as value
document.write("Area of rectangle (5, 10): " + calculateArea(5, 10) + "<br><br>");
// ii. Arguments as variables
let w = 7;
let h = 9;
document.write("Area of rectangle (w, h): " + calculateArea(w, h) + "<br><br>");

// 10. Function to check if a string is palindrome
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
let palindromeStr = prompt("Enter a string to check if it's a palindrome:");
alert(palindromeStr + " is " + (isPalindrome(palindromeStr) ? "a palindrome" : "not a palindrome"));

// 11. Function to convert first letter of each word to uppercase
function titleCase(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
alert(titleCase("the quick brown fox"));

// 12. Function to find the longest word in a string
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
alert("The longest word is: " + findLongestWord("Web Development Tutorial"));

// 13. Function to count occurrences of a letter in a string
function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
alert("Occurrences of 'o': " + countOccurrences("JSResourceS.com", "o"));

// 14. The Geometrizer: Calculate circumference and area of a circle
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br><br>");
}
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2) + "<br><br>");
}
let radius = parseFloat(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);
