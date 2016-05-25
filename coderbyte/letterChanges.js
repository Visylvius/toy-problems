function LetterChanges(str) {
 var alphabetArr = 'abcdefghijklmnopqrstuvwxyz'
 var capitalizedAlphabet = alphabetArr.toUpperCase();
 var vowels = ['a', 'e', 'i', 'o', 'u'];
 capitalizedAlphabet.split('');
 alphabetArr.split('');
 var result = [];
 for (var i = 0; i < str.length; i++) {
 	if (alphabetArr.indexOf(str[i]) !== -1) {
 		var currentIndex = alphabetArr.indexOf(str[i]);
 		result.push(alphabetArr[currentIndex + 1]);
 	} else if (capitalizedAlphabet.indexOf(str[i]) !== -1) {
 		var currentPoint = capitalizedAlphabet.indexOf(str[i]);
 		result.push(capitalizedAlphabet[currentPoint + 1]);
 	} else {
 	    result.push(str[i]);
 	}
 }
  result.forEach(function(element, index) {
      if (vowels.indexOf(element) !== -1 ) {
          result[index] = element.toUpperCase();
      }
  });
  return result.join('');

}
