function duplicateEncoder(word) {
  // ...
  let wordArray = [];
  for (let x = 0; x < word.length; x++) {
      wordArray.push(word[x]);
      wordArray.sort();
  }

  console.log(wordArray);
}

duplicateEncoder("dinosaur");