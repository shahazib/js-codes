function calculatePower() {
    const a = Number(document.getElementById('base').value);
    const b = Number(document.getElementById('exponent').value);
    const result = power(a, b);
    document.getElementById('powerResult').innerText = `Result: ${result}`;
}

function power(a, b) {
    return Math.pow(a, b); 
}


function checkLeapYear() {
    const year = Number(document.getElementById('yearInput').value);
    const result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById('leapYearResult').innerText = result ? `${year} is a leap year.` : `${year} is not a leap year.`;
}


function calculateTriangleArea() {
    const a = Number(document.getElementById('sideA').value);
    const b = Number(document.getElementById('sideB').value);
    const c = Number(document.getElementById('sideC').value);
    const area = areaOfTriangle(a, b, c);
    document.getElementById('areaResult').innerText = `Area of Triangle: ${area.toFixed(2)}`;
}

function areaOfTriangle(a, b, c) {
    const s = (a + b + c) / 2; 
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}


function mainFunction() {
    const marks1 = Number(document.getElementById('marks1').value);
    const marks2 = Number(document.getElementById('marks2').value);
    const marks3 = Number(document.getElementById('marks3').value);
    const average = calculateAverage(marks1, marks2, marks3);
    const percentage = calculatePercentage(marks1, marks2, marks3);
    document.getElementById('marksResult').innerText = `Average: ${average}, Percentage: ${percentage.toFixed(2)}%`;
}

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    const totalMarks = 300; 
    return ((m1 + m2 + m3) / totalMarks) * 100;
}


function customIndexOf() {
    const text = document.getElementById('textInput').value;
    const char = document.getElementById('charInput').value;
    const index = myIndexOf(text, char);
    document.getElementById('indexOfResult').innerText = index !== -1 ? `Character found at index: ${index}` : 'Character not found';
}

function myIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }
    return -1; 
}

function removeVowels() {
    const sentence = document.getElementById('sentenceInput').value;
    const result = sentence.replace(/[aeiouAEIOU]/g, '');
    document.getElementById('removeVowelsResult').innerText = `Result: ${result}`;
}

function countConsecutiveVowels() {
    const text = document.getElementById('vowelText').value;
    const result = countVowelPairs(text);
    document.getElementById('consecutiveVowelsResult').innerText = `Occurrences of consecutive vowels: ${result}`;
}

function countVowelPairs(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length - 1; i++) {
        if (vowels.includes(str[i]) && vowels.includes(str[i + 1])) {
            count++;
        }
    }
    return count;
}


function convertDistance() {
    const km = Number(document.getElementById('distanceKm').value);
    const meters = km * 1000;
    const feet = km * 3280.84;
    const inches = km * 39370.1;
