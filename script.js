
//Part 1: Fizz Buzz
 
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(` ${i} Fizz Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(`numbers that are not divisable by 3 or 5 are : ${i}`);
  }
}

console.log("=================================");

// check prime number

let number = 0; // Start from 0

while (number <= 20) {
  let isPrime = true; // Assume the number is prime

  if (number <= 1) {
    isPrime = false; // Numbers <= 1 are not prime
  } else {
    let divisor = 2; // Start checking divisors from 2
    while (divisor < number) {
      if (number % divisor === 0) {
        // Check if divisible
        isPrime = false; // Not a prime number
        break; // Exit the loop early
      }
      divisor++; // Check the next number
    }
  }

  if (isPrime) {
    console.log(number + " is a prime number");
  }

  number++; // Move to the next number
}
 

// part 3

console.log("==================================");




const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let currentData = "";
let counter = 1;
for (let i = 0; i < data.length; i++) {
  if (data[i] === ',' || data[i] === `\n`) {
    if (counter === 1) {
      cell1 = currentData
    } else if (counter === 2) {
      cell2 = currentData
    } else if (counter === 3) {
      cell3 = currentData
    } else if (counter === 4) {
      cell4 = currentData
      
    }
    counter++
    currentData = ""
    if (data[i] === `\n` ) {
      console.log( cell2, cell3, cell4);
      cell1 = cell2 = cell3 = cell4 = ""; // Reset cells
      counter = 1;
    }
  } else {
    if(data[i]!=="\n"){
      currentData += data[i]
    }
  }
  if (i === data.length - 1){
    console.log(cell1, cell2, cell3, cell4);
  }
}