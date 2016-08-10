//Build a function, `morse_encode(str)` that takes in a string (no
//numbers or punctuation) and outputs the morse code for it. See
//http://en.wikipedia.org/wiki/Morse_code. Put two spaces between
//words and one space between letters.
//
//You'll have to type in morse code: I'd use a hash to map letters to
//codes. Don't worry about numbers.
//

function morse_encode_word(character) {
 var morseString = '';
 var morseCode = {
   a: '.-',
   b: '-...',
   c: '-.-.',
   d: '-..',
   e: '.',
   f: '..-.',
   g: '--.',
   h: '....',
   i: '..',
   j: '.---',
   k: '-.-',
   l: '.-..',
   m: '--',
   n: '-.',
   o: '---',
   p: '.--.',
   q: '--.-',
   r: '.-.',
   s: '...',
   t: '-',
   u: '..-',
   v: '...-',
   w: '.--',
   x: '-..-',
   y: '-.--',
   z: '--..'
 };
   return morseCode[character] + '';


 //if (word === ' ') {
 //	console.log('RUFFYY');
 //}
 //for (var key in morseCode) {
 //	if (key === word) {
 //		morseString += morseCode[word];
 //		console.log('morseString inside for in', morseString);
 //	}
 //}
}

function morse_encode(str){
 var newString = str.split('');
 var morseString = ''
 console.log(newString);
 for (var i = 0; i < newString.length; i++) {
   if (newString[i] === ' ') {
     morseString += ' ';
   } else {
    morseString += morse_encode_word(newString[i]);
    if (newString.length !== (i+1)) {
     morseString += ' ';
    }
   }
 }
 console.log(morseString, 'morseString');
 return morseString;
}

console.log("\nTests for #morse_encode")
console.log("===============================================")
   console.log( "morse_encode(\"q\") == \"--.-\": "  + (morse_encode("q") == "--.-"))
   console.log( "morse_encode(\"cat\") == \"-.-. .- -\": "  + (morse_encode("cat") == "-.-. .- -"))
   console.log( "morse_encode(\"cat in hat\") == \"-.-. .- -  .. -.  .... .- -\": "  + (morse_encode("cat in hat") == "-.-. .- -  .. -.  .... .- -"))

console.log("===============================================")
