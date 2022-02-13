function palindrome(str) {
  let cstr = str.toLowerCase().replace(/\(|\)|:|\/|\\|\.|,|-|_|\s/g, '');
  let rev = cstr.split('').reverse().join('');
  return cstr == rev ? true : false;
}

palindrome("not a palindrome");
