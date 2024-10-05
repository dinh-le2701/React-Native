// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

// 3. Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 10 is: ${sum}`);

// 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log(`10! = ${factorial}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
let evenSum = 0;
for (let i = 12; i < 30; i += 2) {
    evenSum += i;
}
console.log(`Sum of even numbers between 10 and 30: ${evenSum}`);

// 8. Convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // Example: 0°C to °F

// 9. Convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(fahrenheitToCelsius(32)); // Example: 32°F to °C

// 10. Calculate the sum of numbers in an array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Example

// 11. Calculate the average of numbers in an array
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5])); // Example

// 12. Return an array containing only positive numbers
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(filterPositiveNumbers([-2, 3, 0, -5, 6])); // Example

// 13. Find the maximum number in an array
function maxNumber(arr) {
    return Math.max(...arr);
}
console.log(maxNumber([3, 5, 7, 2, 8])); // Example

// 14. Print the first 10 Fibonacci numbers without recursion
function fibonacciNonRecursive() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib);
}
fibonacciNonRecursive();

// 15. Find the nth Fibonacci number using recursion
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(10)); // Example: 10th Fibonacci number

// 16. Return true if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); // Example

// 17. Calculate the sum of digits of a positive integer
function sumOfDigits(n) {
    return n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}
console.log(sumOfDigits(1234)); // Example

// 18. Print the first 100 prime numbers
function printPrimes(limit) {
    let count = 0;
    let num = 2;
    while (count < limit) {
        if (isPrime(num)) {
            console.log(num);
            count++;
        }
        num++;
    }
}
printPrimes(100);

// 19. Return an array of the first "p" prime numbers greater than "n"
function primesGreaterThanN(n, p) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}
console.log(primesGreaterThanN(10, 5)); // Example

// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
    return [...arr.slice(1), arr[0]];
}
console.log(rotateLeft([1, 2, 3, 4])); // Example

// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
    return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
}
console.log(rotateRight([1, 2, 3, 4])); // Example

// 22. Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4])); // Example

// 23. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Example

// 24. Merge two arrays into a new array
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // Example

// 25. Return an array of numbers that are in either array but not both
function symmetricDifference(arr1, arr2) {
    return [...arr1.filter(x => !arr2.includes(x)), ...arr2.filter(x => !arr1.includes(x))];
}
console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // Example

// 26. Return elements that are in the first array but not in the second
function arrayDifference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
console.log(arrayDifference([1, 2, 3], [3, 4])); // Example
