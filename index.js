
// question no: 1  sum function
function calculateSum(a, b) {
    return a + b;
}

// Example usage:
let result = calculateSum(10, 50);
console.log(result);

// Output will be 60

// ............................


//  question no: 2 isEven function

function isEven(num) {
    return num % 2 === 0;
}

// Example usage:
let result1 = isEven(25);
console.log(result1);  // Output will be false

let result2 = isEven(30);
console.log(result2);  // Output will be true


// ..............................


//  question no: 3 findMax function

function findMax(numbers) {
    return Math.max(...numbers);
}

// Example usage:
let array = [8, 50, 7, 2, 90];
let result3 = findMax(array);
console.log(result3);  

// Output will be 90

// ................................

//  question no: 4 reverseString function

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
console.log(reverseString("hello"));  

// Outputs: "olleh"

// ........................


//  question no: 5 filterOddNumber function

function filterOddNumbers(numbers) {
    return numbers.filter(function(number) {
      return number % 2 !== 0;
    });
  }
  
  // Example usage:
  const num = [13, 20, 23, 4, 29, 6, 35, 8, 45, 10];
  const oddNum = filterOddNumbers(num);
  console.log(oddNum); 
  
  // Output: [13, 23, 29, 35, 45]

//   ............................

//  question no: 6 sumArray function

function sumArray(numbers) {
    // Initialize sum to 0
    let sum = 0;

    // Loop through each element in the array and add it to sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Return the final sum
    return sum;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 

// Output: 15

// ...........................

//  question no: 7 sortArray function

function sortArray(arr) {
    // Create a copy of the original array to avoid mutating the original
    const sortedArray = [...arr];
    
    // Sort the array in ascending order
    sortedArray.sort((a, b) => a - b);
    
    // Return the sorted array
    return sortedArray;
}

// Example usage:
const originalArray = [5, 2, 9, 1, 5, 6];
const sortedResult = sortArray(originalArray);
console.log(sortedResult); 

// Output: [1, 2, 5, 5, 6, 9]


//  question no: 8 capitalizeFirstLetter function

function capitalizeFirstLetter(str) {
    // Check if the input string is empty
    if (str === '') {
        return '';
    }
    
    // Capitalize the first letter and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
let inputString = 'hello world';
let capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString); 

// Output: "Hello world"


