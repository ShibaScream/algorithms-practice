function lookAndSee(n = 0) {
  const sequences = [];
  let currentSequence = "1";
  for (let i = 0; i < n; i++) {
    sequences.push(currentSequence);
    let newSequence = "",
      j = 0,
      k = 1;
    if (currentSequence.length < 2) newSequence = "1" + currentSequence;
    else {
      while (j < currentSequence.length) {
        if (currentSequence.charAt(j) != currentSequence.charAt(k)) {
          newSequence += getSubSequenceString(k, j, currentSequence);
          j = k;
        } else {
          k++;
          if (k >= currentSequence.length) {
            newSequence += getSubSequenceString(k, j, currentSequence);
            j = k;
          }
        }
      }
    }
    currentSequence = newSequence;
  }
  return sequences;
}

function getSubSequenceString(k, j, currentSequence) {
  return (k - j).toString() + currentSequence.charAt(j).toString();
}

console.log(lookAndSee(50));
