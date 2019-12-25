// *****************************************************************************
// 1.1 Is Unique
// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
// Ex. 
// "abc"  => true
// "aa"   => false
// "Aa"   => true

// V1- use hash table, time 5min
// time: O(n), where n = input length
// space: O(n)                                                                  ?? double check!
/*
function isUnique(string) {
  // create hash table that will contain k/v of characters and count
  let table = {};

  // loop through each char in string
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // add char to hash table if it doesn't exist
    if (table[char] == undefined) {
      table[char] = 1;
    } else {
      return false;   // if it does exist, exit and return false
    }
  }

  // return true outside of loop
  return true;
}
*/


// V2- no additional data structures
// Uses bit vector                                                              ??
// assumes only lowercase characters
// function isUnique(string) {
// }

// console.log(isUnique("abc"));   // true
// console.log(isUnique("aa"));    // false
// console.log(isUnique("Aa"));    // true




// *****************************************************************************
// 1.2 Check Permutation
// Given two strings, write a method to decide if one is a permutation of the 
// other
// Ex.
// "ab", "ba"     => true
// "abc", "cba"   => true
// "abc", "aba"   => false
// "abc", "ab"    => false

// V1- 
// time: O(n^2) because i use .includes within a loop, and we also use .replace?
// space: O(n) because we duplicate input string
/*
function checkPermutation(str1, str2) {
  // return false if string lengths not equal
  if (str1.length != str2.length) return false;

  // duplicate 2nd string, bec we will mutate this 
  let str2Copy = str2.slice();

  // loop through 1st string (doesn't matter if looping through 1st or 2nd)
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    // check if char in 1st string is in 2nd string
    if (str2Copy.includes(char)) {
      // if yes, delete char from 2nd string
      str2Copy = str2Copy.replace(char, "");

    } else {          // if no, return false
      return false;
    }
  }

  // at the end, str2 should be an empty string if its a permutation
  // return boolean result of str2Copy length and 0
  return str2Copy.length == 0;
}
*/


// V2- more efficient, uses hash table for lookup
// time: O(n), where n = string length of inputs (assumes equal length of both)
/*
function checkPermutation(str1, str2) {
  if (str1.length != str2.length) return false;

  let str2Hash = {};
  
  // build hash counter: O(n) time
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    // if char is not in hash, make corresponding value = 1
    if (str2Hash[char] == undefined) {
      str2Hash[char] = 1;
    } else {                  // char is in hash (duplicate) so quit
      // str2Hash[char] += 1;
      return false;
    }
  }

  return true;
}
*/


// V3- Sort both inputs first, then compare values
// Note* assumes inputs all lowercase/no spaces/non alphabetic chars
// Time: O(N logN)
/*
function checkPermutation(str1, str2) {
  if (str1.length != str2.length) return false;
  let str1Copy = quickSort(str1);
  let str2Copy = quickSort(str2);

  return str1Copy === str2Copy;
}

// Helper funciton sorts alphabetically (lowercase only)
// returns new sorted string
// "ecbad" => "abcde"
function quickSort(str) {
  // return input str, if input length = 1 (bec sorted already) base case
  if (str.length <= 1) return str; 

  // choose pivot point (use last char)
  let pivotIdx = str.length - 1;
  let pivot = str[pivotIdx];
  let strCopy = str.slice(0, -1);
  let left = "";
  let right = "";

  // loop through each char in strCopy
  for (let i = 0; i < strCopy.length; i++) {
    let char = strCopy[i];
    if (char < pivot) {
      left = left + char;
    } else {
      right = right + char;
    }
  }

  return quickSort(left) + pivot + quickSort(right);
}
// console.log(quickSort("ecbad"));
*/


// V4- same as V3, just shorter
// function checkPermutation(str1, str2) {
//   return str1.split("").sort().join("") == str2.split("").sort().join("");
// }

// console.log(checkPermutation("ab", "ba"));      // true
// console.log(checkPermutation("abc", "cba"));    // true
// console.log(checkPermutation("abc", "aba"));    // false  
// console.log(checkPermutation("abc", "ab"));     // false





// *****************************************************************************
// 1.3 URLify: Write a method to replace all spaces in a string with '%20'
// Assume that the string has sufficient space at the end to hold the additional
// characters, and that you are given the "true" length of  the string
// Ex.
// "Mr John Smith" => "Mr%20John%20Smith"
// "Mr John Smith" => "Mr%20John%20Smith"

// function urlify(string) {
//   let words = string.split(" ");
//   return words.join("%20");
// }

// console.log(urlify("Mr John Smith"));   // "Mr%20John%20Smith"




// *****************************************************************************
// 1.4 Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a 
// palindrome (word that's the same forwards and backwards).
// palindrome need not be limited to real words. ignore casing and non-letters
// Ex.
// Input: 'Tact Coa'
// Output: true     (permutations: 'taco cat', 'atco cta')

// V1- TERRIBLY INEFFICIENT- finds all permutations first
// ex. 'tact coa'     => true
// function palindromePermutation(string) {
//   // find all permutations of string
//   // loop through each one to see if any are palindromes
// }
  
  
// V2- uses hash table, does not find all permutations of string
// Time: O(n)
// Space: O(n)
// what characteristics of a string that is a permutation of a palindrome
// 'tact coa'    vs     'taco cat'   
// 2 t's  even
// 2 a's  even
// 2 c's  even
// 1 o    AT MOST 1 odd character count 
// ex. 'tact coa'     => true
/*
function palindromePermutation(string) {
  // get rid of all white spaces, and make string lowercase
  let newStr = string.split(" ").join("").toLowerCase();

  // create hash table of all characters and counts
  let charCount = {};
  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;    // ++ work?
    }
  }

  // check if all of the counts are even and that there's only 1 (or 0) odd counts
  let counts = Object.values(charCount);
  // counts = [2, 2, 2, 1]
  let numOdd = 0;

  for (let i = 0; i < counts.length; i++) {
    let count = counts[i];
    // if count is odd, increment numOdd counter
    if (count % 2 === 1) numOdd++;
    if (numOdd > 1) return false;
  }

  return true;
}

console.log(palindromePermutation('tact coa'));     // true
console.log(palindromePermutation('tact ca'));      // true   
console.log(palindromePermutation('act coa'));      // false
console.log(palindromePermutation('tact coooa'));   // true    taoooat
*/





// *****************************************************************************
// 1.5 One Way
// There are three types of edits that can be performed on strings:
// 1 insert a character, 2 remove a char, or 3 replace a char
// Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// ex.
// "pale", "ple"    => true
// "pales", "pale"  => true
// "pale", "bale"   => true
// "pale", "bake"   => false

function oneWay(originalStr, modifiedStr) {
  if (originalStr == modifiedStr) return true;    // 0 edits
  // if string lengths are not within +/- 1 of each other, return false
  
  // check conditions separately?
  // 1 insertion of only 1 character (or 0)
  // "pale" 
  // "pasle"
}


console.log(oneWay("pale", "pale"));    // true
console.log(oneWay("pale", "ple"));     // true
console.log(oneWay("pales", "pale"));   // true
console.log(oneWay("pale", "bale"));    // true
console.log(oneWay("pale", "bake"));    // false
console.log(oneWay("pale", "lpae"));    // false
