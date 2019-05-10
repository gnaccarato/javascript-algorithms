// Find Longest Word
function findLongestWordLength(str) {
  let words = str.split(' '); //split string into words
  let longestWord = 0; //initial length
  for(let i = 0; i < words.length; i++) { //loop through words
    if(words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Largest Number in Arrays
function largestOfFour(arr) {  
  var results = []; //store answer as empty array
  for (let i = 0; i < arr.length; i++) { //loop through outer array
    let largestNum = arr[i][0]; //initialize largest number as the first number
    for(let j = 0; j < arr[i].length; j++) { //inner loop for sub arrays
      if(arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    results[i] = largestNum; //save largest number in corresponding position inside results array
  }
  return results;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//
function largestOfFour(arr) {
  // You can do this!
  let newArr = []; 

  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
  }
  return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");

// Repeat a String
function repeatStringNumTimes(str, num) {
  let stringy = ''; // variable holds repeated word
  while (num > 0) { //repeat code as many times as num
    stringy += str; //add str to stringy variable
    num--; //decrease num through the while loop
  }
  return stringy;
}

repeatStringNumTimes("abc", 3);

//Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
   return str.slice(0, num) + '...';
  } 
  return str;  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Finders Keepers
function findElement(arr, func) {
  let num = 0;
  for(let i = 0; i < arr.length; i++) { //iterate through array
    num = arr[i]; //num is passed into function so we set it to each array index
    if(func(num)) { //checks each number
      return num; //return if true
    }
  }
  return undefined; //if no numbers in array pass functions test
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo Who
function booWho(bool) {
  return typeof bool === 'boolean'; //typeof operator checks if boolean or not, returns true or false
}

booWho(null);

//Title Case a Sentence
function titleCase(str) {
  return str
  	.toLowerCase()
  	.split(' ')
  	.map((word) => word[0].toUpperCase() + word.substr(1))
  	.join(' ')
}

titleCase("I'm a little tea pot");

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let dankArray = arr2.slice(); //Create copy to mutate
  for (let i = 0; i < arr1.length; i++) { //Iterate through arr1
    dankArray.splice(n, 0, arr1[i]); //insert items to index n of dankArray
    n++; //increment to insert all items from arr1 into dankArray
  }
  return dankArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer 
function bouncer(arr) {  
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);

// Where Do I Belong?
function getIndexToIns(arr, num) {
  arr.push(num); //add num to array
  arr.sort((a, b) => {return a - b}); //sort numbers in ascending order
  return arr.indexOf(num); //return index of num in the array  
}
getIndexToIns([40, 60], 50);

// Mutations
function mutation(arr) {
  let dank1 = arr[0].toLowerCase(); // 1st word
  let weed2 = arr[1].toLowerCase(); // 2nd word
  for(let i = 0; i < weed2.length; i++) { // loop through 2nd word
    if(dank1.indexOf(weed2[i]) < 0) //if any characters not found, return false
      return false        
  }
  return true
}
mutation(["hello", "hey"]);

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let chunkyArray = [];
  let dankArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      dankArray.push(arr[i]);
    } else {
      dankArray.push(arr[i]);
      chunkyArray.push(dankArray);
      dankArray = [];
    }
  }
  if(dankArray.length !== 0) {
    chunkyArray.push(dankArray);
  }
  return chunkyArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
