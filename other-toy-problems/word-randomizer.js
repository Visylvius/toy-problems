function jumbleWords(str) {
  var result = [];
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = words[i].split('');
    var middleLetters = letters.slice(1,-1);
    if (word.length === 1) {
      result.push(word);
      continue;
    }
    if (word.length >= 4) {
      result.push(word[0] + word[2] + word[1] + word[3]);
      continue;
    }
    result.push(letters[0] + _.shuffle(middleLetters).join('') + letters[letters.length - 1]);

  }
  return result.join(' ');
}

console.log(jumbleWords('this is a test'));
