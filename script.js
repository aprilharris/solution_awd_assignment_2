// ## Class Assignment 2: Variables Practice

// **Step 1**:  

// You should make sure that your HTML file (index.html) nests your JavaScript file (script.js) within its <body> tags. 

// **Step 2**: 
// Declare and initialize the following values in the script.js file and hit run.  

// `const numBooks = 100`


// `const numBoomarks = 30` 


// `let totalItems` 

const numBooks = 100;
const numBookmarks = 30;
let totalItems;

console.log("\n\n*************STEP 3*************\n\n");
// **Step 3**: 

// In your console, you should conduct the following arithmetic operators for `numBooks`, `numBookmarks` and `totalItems`:
// - Negation
// - Addition
// - Subtraction
// - Multiplication
// - Division
// - Modulus

// negation
console.log("\nNEGATION");
totalItems = -numBooks;
console.log("Total items: " + totalItems);

// addition
console.log("\nADDITION");
totalItems = numBooks + numBookmarks;
console.log("Total items: " + totalItems);

// subtraction
console.log("\nSUBTRACTION");
totalItems = numBooks - numBookmarks;
console.log("Total items: " + totalItems);

// multiplication 
console.log("\nMULTIPLICATION");
totalItems = numBooks * numBookmarks;
console.log("Total items: " + totalItems);

// division 
console.log("\nDIVISION");
totalItems = numBooks / numBookmarks;
console.log("Total items: " + totalItems);

// modulus
console.log("\nMODULUS");
totalItems = numBooks % numBookmarks;
console.log("Total items: " + totalItems);

// **Step 4**: 
// Declare and initialize your own set of variables in the script.js file and hit run for pizza and soda. Let your total items be defined as let totalFood. 

let pizza = 20;
let soda = 20;
let totalFood;


console.log("\n\n*************STEP 5*************\n\n");

// **Step 5**: 
// In your console, your should conduct the arithmetic operators noted above for both pizza and soda.


// negation
totalFood = -pizza;
console.log("\nNEGATION");
console.log("Total food: " + totalFood);

// addition
totalFood = pizza + soda;
console.log("\nADDITION");
console.log("Total food: " + totalFood);

//subtraction
totalFood = pizza - soda; console.log("\nSUBTRACTION");
console.log("Total food: " + totalFood);

// multiplication
totalFood = pizza * soda; console.log("\nMULTIPLICATION");
console.log("Total food: " + totalFood);

//division
totalFood = pizza / soda;
console.log("\nDIVISION");
console.log("Total food: " + totalFood);

//modulus
totalFood = pizza % soda;
console.log("\nMODULUS");
console.log("Total food: " + totalFood);

// **Step 6**: 
// Hit submit on the assignment when you're finished.
