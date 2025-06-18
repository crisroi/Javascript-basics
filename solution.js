// 1. Store your name and display it
let myName = "Alex";
alert("Hello, my name is " + myName);

// 2. Two numbers and their operations
let a = 10, b = 5;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

// 3. Celsius to Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// 4. Area of a rectangle
let length = 8, width = 4;
let area = length * width;
console.log("Area of Rectangle:", area);

// 5. Check even or odd
let num = 7;
console.log(num + " is", num % 2 === 0 ? "Even" : "Odd");

// 6. Leap year check
let year = 2024;
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(year + " is", isLeap ? "a Leap Year" : "not a Leap Year");

// 7. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 8. Count vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("education"));

// 9. Largest of 5 numbers
let numbers = [10, 25, 17, 38, 3];
console.log("Largest:", Math.max(...numbers));

// 10. Palindrome check
function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, '');
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("Racecar"));

// 11. Factorial
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
console.log("Factorial:", factorial(5));

// 12. Random number between range
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1, 100));

// 13. Seconds to h:m:s
let totalSeconds = 5000;
let hrs = Math.floor(totalSeconds / 3600);
let mins = Math.floor((totalSeconds % 3600) / 60);
let secs = totalSeconds % 60;
console.log(`${hrs}h ${mins}m ${secs}s`);

// 14. Prime check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}
console.log(isPrime(17));

// 15. Capitalize first letter of each word
function capitalize(sentence) {
  return sentence.split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}
console.log(capitalize("hello world from js"));

// 16. Sum from 1 to n
let n = 100;
let sum = (n * (n + 1)) / 2;
console.log("Sum:", sum);

// 17. Average of array
let arr = [10, 20, 30];
let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log("Average:", avg);

// 18. Remove duplicates
let dupes = [1, 2, 2, 3, 4, 4];
let noDupes = [...new Set(dupes)];
console.log("No duplicates:", noDupes);

// 19. Countdown then blast off
for (let i = 10; i >= 1; i--) console.log(i);
console.log("Blast off!");

// 20. String contains only numbers
function isNumeric(str) {
  return /^\d+$/.test(str);
}
console.log(isNumeric("123456"));

// 21. Second smallest number
let values = [4, 1, 9, 2, 6];
let sorted = [...new Set(values)].sort((a, b) => a - b);
console.log("Second smallest:", sorted[1]);

// 22. Multiplication table
let tableNum = 5;
for (let i = 1; i <= 12; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

// 23. Password validator
function validatePassword(pw) {
  return /[A-Z]/.test(pw) &&
         /[a-z]/.test(pw) &&
         /[0-9]/.test(pw) &&
         pw.length >= 8;
}
console.log(validatePassword("StrongPass1"));

// 24. Simple calculator
function calculate(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Error: Divide by zero";
    default: return "Invalid operator";
  }
}
console.log(calculate(8, 4, '*'));

// 25. Find all factors
function factors(n) {
  let result = [];
  for (let i = 1; i <= n; i++)
    if (n % i === 0) result.push(i);
  return result;
}
console.log(factors(12));

// 26. Check if two strings are anagrams
function isAnagram(str1, str2) {
  let clean1 = str1.replace(/\W/g, '').toLowerCase();
  let clean2 = str2.replace(/\W/g, '').toLowerCase();
  return clean1.split('').sort().join('') === clean2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent"));

// 27. Fibonacci sequence up to n terms
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++)
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  return sequence.slice(0, n);
}
console.log(fibonacci(10));

// 28. Sort array without .sort()
function manualSort(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}
console.log(manualSort([5, 3, 8, 1, 2]));

// 29. Count how often a value appears
function countOccurrences(arr, val) {
  return arr.filter(item => item === val).length;
}
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));

// 30. Basic shopping cart
let cart = [];

function addItem(name, price) {
  cart.push({ name, price });
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
}

function totalPrice() {
  return cart.reduce((total, item) => total + item.price, 0);
}

addItem("Shirt", 20);
addItem("Hat", 15);
removeItem("Hat");
console.log("Cart total: $" + totalPrice());