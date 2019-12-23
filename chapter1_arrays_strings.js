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
function checkPermutation(str1, str2) {
  if (str1.length != str2.length) return false;

  let str2Hash = {};
  
  // build hash counter
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (str2Hash[char] == undefined) {
      str2Hash[char] = 1;
    } else {
      str2Hash[char] += 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    let char =  str1[i];

    // if char from str1 is in str2
    if (str2Hash[char]) {

    } else {
      return false;
    }
  }
}

console.log(checkPermutation("ab", "ba"));
console.log(checkPermutation("abc", "cba"));
console.log(checkPermutation("abc", "aba"));
console.log(checkPermutation("abc", "ab"));