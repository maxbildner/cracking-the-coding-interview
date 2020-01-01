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

