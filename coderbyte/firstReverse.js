function FirstReverse(str) {
	var newStr = [];
 for (var i = str.length; i >= 0; i--) {
 	newStr.push(str[i]);
 }
  return newStr.join('');

}
