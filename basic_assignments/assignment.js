/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
*/

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

//(1) Write an arrow function that adds a new entry to bookList
const addNewEntry = (title, author) => {
  bookList.push({ title: title, author: author });
};
addNewEntry("Eragon", "Christopher Paolini");

//(2) Write an arrow function that removes a specific book from the bookList
const removeEntry = (title, author) => {
  bookObject = { title: title, author: author };
  const indexOfBook = bookList.indexOf(bookObject);
  if (indexOfBook > -1) {
    bookList.splice(indexOfBook, 1);
  }
};
removeEntry("Don Quixote", "Miguel de Cervantes");

//(3) Write an arrow function that lists out all the books or all the authors in the book list */
const listBooks = () => {
  for (const book of bookList) {
    console.log("Title: " + book.title + ", Author: " + book.author);
  }
};
listBooks();

/* Intermediate Challenge */
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
//(4) Write a one-line arrow function that takes in a number and returns a string stating whether the number is positive or negative using a ternary operator (assume the number will never be zero)
const isSigned = (number) => {
  return number < 0 ? "Number is negative." : "Number is positive.";
};
console.log(isSigned(-5));

//(5) Write a switch statement for a 'day' variable that prints out something based off of what day of the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party"
const dayOfTheWeek = (day) => {
  switch (day) {
    case "Monday":
      return "Good luck";
    case "Wednesday":
      return "Hump day";
      break;
    case "Friday":
      return "Party";
    default:
      return "Just another day";
  }
};
console.log(dayOfTheWeek("Monday"));

//(6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every number from 1 up to that number ex. sumUp(7) = 28
const sumOfNumbers = (number) => {
    return ((number)*(number+1))/2;
}
console.log(sumOfNumbers(7));

/* Harder Challenge */

//(7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells me what I should wear accordingly */
const returnOutfit = (temperature) => {
  const ftemperature = temperature * (9 / 5) + 32;
  let finalString = "";
  finalString += "The temperature is " + ftemperature + " degrees farhenheit. ";
  if (ftemperature < 0) {
    return finalString + "Way too cold, don't go outside.";
  }
  if (ftemperature < 40) {
    return finalString + "Brrrr, it's chilly outside, grab a puffer.";
  }
  if (ftemperature < 60) {
    return finalString + "It's a little chilly, grab a sweatshirt.";
  }
  if (ftemperature < 80) {
    return finalString + "Good weather, wear whatever you want.";
  }
  return finalString + "HOT!!! Wear light clothes.";
};
console.log(returnOutfit(25));

// (8) Write a function that takes in an array and prints out the amount of truthy values in that array using .forEach() 

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const numberOfTruthy = (arr) => {
    let sum = 0;
    const isTruthy = (value) => {if(value) sum+=1;}
    arr.forEach(isTruthy)
    return sum
}
console.log(numberOfTruthy(exampleArray))


/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
      an array of the path you took to make it equal four
      ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
      For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros
