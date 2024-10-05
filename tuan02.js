// 27. Return a new array with distinct elements
function distinctElements(arr) {
    return [...new Set(arr)];
}
console.log(distinctElements([1, 2, 2, 3, 4, 4])); // Example

// 28. Calculate the sum of first 100 prime numbers and return them in an array
function sumFirst100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    const sum = primes.reduce((acc, prime) => acc + prime, 0);
    return { primes, sum };
}
console.log(sumFirst100Primes());

// 29. Print the distance between the first 100 prime numbers
function primeDistances() {
    let primes = sumFirst100Primes().primes;
    let distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }
    console.log(distances);
}
primeDistances();

// 30. Add two large positive numbers (as strings)
function addLargeNumbers(a, b) {
    let result = '';
    let carry = 0;
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry > 0) result = carry + result;
    return result;
}
console.log(addLargeNumbers('123456789123456789', '987654321987654321'));

// 31. Count the number of words in a text
function wordCount(text) {
    return text.trim().split(/\s+/).length;
}
console.log(wordCount('This is a sample sentence.'));

// 32. Capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords('this is a sample text.'));

// 33. Calculate the sum of numbers received in a comma-delimited string
function sumFromCommaString(str) {
    return str.split(',').reduce((acc, num) => acc + parseFloat(num), 0);
}
console.log(sumFromCommaString('1.5,2,3.5,4')); // Example

// 34. Return an array with words inside a text
function getWords(text) {
    return text.match(/\w+/g);
}
console.log(getWords('This is an example sentence!'));

// 35. Convert CSV text to a bi-dimensional array
function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}
console.log(csvToArray('name,age\nJohn,30\nJane,25'));

// 36. Convert a string to an array of characters
function stringToArray(str) {
    return [...str];
}
console.log(stringToArray('hello')); // Example

// 37. Convert a string to an array containing the ASCII codes of each character
function stringToAsciiArray(str) {
    return [...str].map(char => char.charCodeAt(0));
}
console.log(stringToAsciiArray('hello')); // Example

// 38. Convert an array of ASCII codes to a string
function asciiArrayToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}
console.log(asciiArrayToString([104, 101, 108, 108, 111])); // Example

// 39. Implement the Caesar cipher
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, char => {
        const base = char < 'a' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
}
console.log(caesarCipher('Hello World!', 3));

// 40. Implement bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2])); // Example

// 41. Calculate the distance between two points (x1, y1) and (x2, y2)
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
console.log(distanceBetweenPoints(0, 0, 3, 4)); // Example

// 42. Check if two circles are intersecting
function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = distanceBetweenPoints(x1, y1, x2, y2);
    return distance <= r1 + r2;
}
console.log(areCirclesIntersecting(0, 0, 5, 7, 0, 3)); // Example

// 43. Extract a column from a bi-dimensional array
function extractColumn(arr, colNum) {
    return arr.map(row => row[colNum]);
}
console.log(extractColumn([[1, 2], [3, 4], [5, 6]], 1)); // Example

// 44. Convert a binary string to a number
function binaryToNumber(binStr) {
    return parseInt(binStr, 2);
}
console.log(binaryToNumber('1101')); // Example

// 45. Sum all numbers in a jagged array
function sumJaggedArray(arr) {
    return arr.flat(Infinity).reduce((acc, num) => acc + num, 0);
}
console.log(sumJaggedArray([1, [2, [3]], 4])); // Example

// 46. Find the maximum number in a jagged array
function maxInJaggedArray(arr) {
    return Math.max(...arr.flat(Infinity));
}
console.log(maxInJaggedArray([1, [2, [5, 3]], 4])); // Example

// 47. Deep copy a jagged array
function deepCopyJaggedArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
console.log(deepCopyJaggedArray([1, [2, [3]], 4])); // Example

// 48. Return the longest word in a string
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord('Find the longest word in this sentence'));

// 49. Shuffle an array of strings
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray(['apple', 'banana', 'cherry']));

// 50. Return an array of n unique random numbers from 1 to n
function uniqueRandomNumbers(n) {
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(arr);
}
console.log(uniqueRandomNumbers(10));

// 51. Find the frequency of letters in a string
function letterFrequency(str) {
    let freqMap = {};
    for (let char of str.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
    }
    return Object.entries(freqMap);
}
console.log(letterFrequency('Hello World!'));

// 52. Calculate Fibonacci(500) with high precision (use BigInt)
function fibonacciBigInt(n) {
    let a = 0n, b = 1n;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
console.log(fibonacciBigInt(500));

// 53. Calculate 70! with high precision (use BigInt)
function factorialBigInt(n) {
    let result = 1n;
    for (let i = 1n; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialBigInt(70n));
