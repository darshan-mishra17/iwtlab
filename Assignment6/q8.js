
const inputString = "Hello, this is a sample string";


const wordArray = inputString.split(" ").map((word) => ({
  word: word,
  length: word.length,
}));


console.log(wordArray);
