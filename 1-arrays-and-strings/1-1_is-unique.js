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







