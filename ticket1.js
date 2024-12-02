// Write a JavaScript function `convertGBPtoEUR`
// that takes in a specified amount in £
// and converts it to € using a given exchange rate. 
// The function should return the converted amount.
// Future stretch goal - find a way of linking live exchange rates

function convertGBPtoEUR (pounds, rate) {
   let euros = pounds * rate;
   return euros;
}

//Write another function convertGBPtoUSD
 //that takes in a specified amount in £,
 // and converts it to $ using a given exchange rate.
 // It should behave in a very similar way to the previous function.

 function convertGBPtoUSD (pounds){
   let dollars = pounds * 1.27;
   return dollars;
 }

 