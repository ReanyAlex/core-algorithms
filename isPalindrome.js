/*
Determine if a string is a palindrome. Return true or false.

Ignore punctuation, spacing, and case sensitivity.
*/

function isPalindrome(str) {
  /* make the string uniform to make it easier to check
  by removing punctuation, spacing, and case sensitivity.*/
  str = str.toLowerCase().replace(/[\W_]/g,"");
  // reversing the string
  const strReverse = str.split("").reverse().join("")
  //Checking if it is a palindrome
  if (str === strReverse){
    return true;
  }else {
    return false;
  }
}

console.log(isPalindrome('radar'));
// => true

console.log(isPalindrome('bananas'));
// => false

console.log(isPalindrome('A man, a plan, a canal: Panama'));
// => true
