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

/*
// V1- use helper functions to check conditions separately
// Time: O(n), n = length of shorter string, runtime only increases if both string lengths are long
// Space: O(1) ?
function oneWay(originalStr, modifiedStr) {
  if (originalStr == modifiedStr) return true;                                  // 0 edits

  // difference between lengths of input strings will determine which helper function to use
  let stringsLengthDiff = modifiedStr.length - originalStr.length;

  // if diff between string lengths are more/less than +/- 1, return false
  if (stringsLengthDiff > 1 || stringsLengthDiff < -1) return false;

  // if diff = 0, then check for 1 replacement of a char
  if (stringsLengthDiff === 0) {
    return checkReplace(originalStr, modifiedStr);
  } else if (stringsLengthDiff === 1) {                                         // if string length diff + 1, that means we inserted
    return checkReplaceOrRemoval(originalStr, modifiedStr);
  } else if (stringsLengthDiff === -1) {
    return checkReplaceOrRemoval(modifiedStr, originalStr);
  }
}

// Helper function
// Assumes input lengths equal and not the same values
// Ex. "pale", "bale" => true
function checkReplace(originalStr, modifiedStr) {
  let numDiffChars = 0;

  // loop through chars of both input strings
  for (let i = 0; i < originalStr.length; i++) {
    let char1 = originalStr[i];
    let char2 = modifiedStr[i];
    // compare each char, if not the same value, increment diff var by 1
    if (char1 != char2) numDiffChars++;
    // if diff var value > 1, return false
    if (numDiffChars > 1) return false;
  }

  // return true outside loop
  return true;
}
// console.log(checkReplace("pale", "bale"));    // true
// console.log(checkReplace("pale", "pele"));    // true
// console.log(checkReplace("pale", "pete"));    // false


// Helper function
// Assumes string length of modifiedStr is only +1 character diff more
// modifiedStr will always be +1 longer length
// "pale", "pasle" => true
function checkReplaceOrRemoval(str1, str2) {
  let index1 = 0;
  let index2 = 0;

  // loop num times equal to longer string length
  for (let i = 0; i < str2.length; i++) {
    let char1 = str1[index1];
    let char2 = str2[index2];

    // if chars are not the same
    if (char1 != char2) {
      // and if indexes are not the same, return false
      if (index1 != index2) return false;
      // increment index 2 so we can get to the same letter as original
      index2++;
    } else {
      // incremenet both indexes
      index1++;
      index2++;
    }
  }

  return true;
}
// console.log(checkReplaceOrRemoval("pale", "pasle"));     // true
// console.log(checkReplaceOrRemoval("pale", "pales"));     // true
// console.log(checkReplaceOrRemoval("pale", "spale"));     // true
// console.log(checkReplaceOrRemoval("pale", "lepas"));     // false
// console.log(checkReplaceOrRemoval("pale", "paels"));     // false



console.log(oneWay("pale", "pale"));    // true       0 edit
console.log(oneWay("pale", "ple"));     // true       1 removal
console.log(oneWay("pales", "pale"));   // true       1 removal
console.log(oneWay("pale", "bale"));    // true       1 replace
console.log(oneWay("pale", "bake"));    // false      2 replace
console.log(oneWay("pale", "lpae"));    // false      1 removal, 1 replace
console.log(oneWay("pale", "paels"));   // false
*/

