function oneEditApart(str1 = '', str2 = '') {
  let strA = str1.length > str2.length ? str1 : str2;
  let strB = str1 === strA ? str2 : str1;
  let editCount = 0;
  if (strA.length - strB.length > 1) return false;

  for (
    let strAIndex = 0, strBIndex = 0;
    strAIndex < strA.length;
    strAIndex++, strBIndex++
  ) {
    if (strA.charAt(strAIndex) != strB.charAt(strBIndex)) {
      if (strAIndex === strA.length - 1) {
        editCount++;
      } else if (strA.charAt(strAIndex + 1) === strB.charAt(strBIndex)) {
        editCount++;
        strAIndex++;
      } else if (strA.charAt(strAIndex + 1) === strB.charAt(strBIndex + 1)) {
        editCount++;
        strAIndex++;
        strBIndex++;
      } else {
        return false;
      }
    }
  }
  return editCount <= 1;
}

console.log(oneEditApart('cat', 'dog'));
console.log(oneEditApart('cat', 'cats'));
console.log(oneEditApart('cat', 'cut'));
console.log(oneEditApart('cat', 'cast'));
console.log(oneEditApart('cat', 'at'));
console.log(oneEditApart('cat', 'act'));
