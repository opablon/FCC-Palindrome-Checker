function palindrome(str) {
  let regex = /[^A-Za-z0-9]/g;
  let newStr = str.replace(regex, "").toLowerCase();
  let revStr = newStr.split("").reverse().join("");
  if (newStr === revStr) {
    return true;
  } else {
    return false;
  }
}
