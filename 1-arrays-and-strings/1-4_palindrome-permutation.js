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