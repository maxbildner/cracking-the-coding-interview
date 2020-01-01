// 1.6 String Compression
// Similar to LC443 EASY
// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become 
// a2blc5a3, If the "compressed" string would not become smaller than the 
// original string, your method should return the original string.
// Can assume the string has only uppercase and lowercase letters (a - z). 

// V1- CTCI Version Input is String, not array
// "aabcccccaaa"  => 'a2b1c5a3'
// "a"            => 'a'
// function stringCompression(string) {
// }
// console.log(stringCompression("aabcccccaaa"));      //=> 'a2b1c5a3'
// console.log(stringCompression("a"));                //=> 'a'


// V2- LC443 Version Input is Array, return number not string or array
// Mutates input- but not the most efficient space wise
// Time Complexity: O(N)
// Space Complexity: O(N)
// ["a", "a", "b", "c", "c", "c"]       => 5    ["a", "2", "b", "c", "3"]
// ["a"]                                => 1    ["a"]
// ["a", "a", "a", "b", "b", "a", "a"]  => 6    ["a","3","b","2","a","2"]
function stringCompression(strArr) {
  let count = 1;
  let length = strArr.length;
  let i = j = 0;
  let newStrArr = [];
  if (strArr.length === 1) return strArr.length;

  while (i < length) {
    let char = strArr[i];

    j = i + 1;
    while (char === strArr[j]) {
      count++;
      j++;
    }

    if (count > 1) {
      newStrArr.push(char);
      newStrArr = newStrArr.concat(String(count).split(''));
      count = 1;
    } else {
      newStrArr.push(char);
    }
    // move pointer i to j
    i = j;
  }

  strArr.splice(0, length, ...newStrArr);

  return newStrArr.length;
}

let strArr1 = ["a", "a", "b", "b", "c", "c", "c"];
let strArr2 = ["a"];
let strArr3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
let strArr4 = ["a", "a", "b", "c", "c", "c"];
let strArr5 = ["a", "a", "a", "b", "b", "a", "a"];
console.log(stringCompression(strArr1));            //=> 6
console.log(stringCompression(strArr2));            //=> 1
console.log(stringCompression(strArr3));            //=> 4
console.log(stringCompression(strArr4));            //=> 5
console.log(stringCompression(strArr5));            //=> 6
console.log(strArr1);                               //=> ["a", "2", "b", "2", "c", "3"]
console.log(strArr2);                               //=> ["a"]
console.log(strArr3);                               //=> ["a", "b", "1", "2"]
console.log(strArr4);                               //=> ["a", "2", "b", "c", "3"]
console.log(strArr5);                               //=> ["a","3","b","2","a","2"]