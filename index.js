
// sum function
function calculateSum(a, b) {
    return a + b;
}

// Example usage:
let result = calculateSum(10, 50);
console.log(result);

// Output will be 60

// ............................


// isEven function
function isEven(num) {
    return num % 2 === 0;
}

// Example usage:
let result1 = isEven(25);
console.log(result1);  // Output will be false

let result2 = isEven(30);
console.log(result2);  // Output will be true


// ..............................


// findMax function

function findMax(numbers) {
    return Math.max(...numbers);
}

// Example usage:
let array = [8, 50, 7, 2, 90];
let result3 = findMax(array);
console.log(result3);  

// Output will be 90

// ................................

// reverseString function

function reverseString(str) {
    // Split the string into an array of characters
    let charArray = str.split('');
    
    // Reverse the array of characters
    let reversedArray = charArray.reverse();
    
    // Join the array of characters back into a string
    let reversedString = reversedArray.join('');
    
    return reversedString;
}

// Example usage:
console.log(reverseString("ostad"));  // Outputs: "olleh"