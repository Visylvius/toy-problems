//Catsylvanian money is a strange thing: they have a coin for every
//denomination (including zero!). A wonky change machine in
//Catsylvania takes any coin of value N and returns 3 new coins,
//valued at N/2, N/3 and N/4 (rounding down).
//
//Write a method `wonky_coins(n)` that returns the number of coins you
//are left with if you take all non-zero coins and keep feeding them
//back into the machine until you are left with only zero-value coins.
//

//take the coin and divide it by 4, 3, and 2 rounding down
//if any of the coins are equal to zero remove them
//

// 5 / 4
console.log(Math.floor(3/4))
// 5 / 3
console.log(Math.floor(3/3))
// 5 / 2
console.log(Math.floor(3/2))

//after you put 5 in
// number of coins = 0

// remaining coins 1,1,2

// put 1 in
// 1/4 = zero
// 1/3 = 0
// 1/2 = 0
//number of coins = 3
//remaining coins 1,2

//put 1 in
//number of coins = 6
//remaining coins 2
//put 2 in
//remaining coins = 8
//remaning coins 1
//put 1 in
//remaining coins = 11


//3
//remaining coins = 15

//how do i store the coins?

//given 1 integer

// check to see if n/4 === 0 so and so
//if it is equal to zero then increment number of coins
// else push result into array
//run for loop across resultArray
//divide i  by 4, 3, 2
//if i = 0
//increment number of coins
//else push number into result array
//return number of coins

function wonky_coins(n){
 var numberOfCoins = 0;
 var resultArray = [];
 if (n === 0) {
   return 1;
 }
 resultArray.push(Math.floor(n/4), Math.floor(n/3), Math.floor(n/2));
 for (var i = 0; i < resultArray.length; i++) {
   if (resultArray[i] === 0) {
     numberOfCoins++;
     continue;
   } else if (resultArray[i] !== 0) {
     resultArray.push(Math.floor(resultArray[i] /4), Math.floor(resultArray[i] /3), Math.floor(resultArray[i] /2))
   }
 }
 return numberOfCoins;
}

console.log("\nTests for #wonky_coins")
console.log("===============================================")
   console.log( "wonky_coins(1) == 3: "  + (wonky_coins(1) == 3))
   console.log( "wonky_coins(5) == 11: "  + (wonky_coins(5) == 11))
   console.log( "wonky_coins(6) == 15: "  + (wonky_coins(6) == 15))
   console.log( "wonky_coins(0) == 1: "  + (wonky_coins(0) == 1))
console.log("===============================================")
