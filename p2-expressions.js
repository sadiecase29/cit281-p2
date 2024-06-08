/*
    CIT 281 Project 2
    Name: Sadie Case
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  }
  
  console.log(result);

// Returns a single, random, lowercase letter

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Returns the random length string 

 function getRandomString(min, max) {
    const length = getRandomInteger(min, max);
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += getRandomLetter();
    }
    return randomString;
}

console.log(getRandomString(10, 20));

// Returns a string in ascending order 

function getSortedString(string) {
    return [...string].sort().join('');
}
console.log(getSortedString("xpacd"));
