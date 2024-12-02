// Write a JavaScript function `convertGBPtoEUR`
// that takes in a specified amount in £
// and converts it to € using a given exchange rate. 
// The function should return the converted amount.
// Future stretch goal - find a way of linking live exchange rates

function convertGBPtoEUR (pounds) {
   let euros = pounds * 1.21;
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


//  Write a function convertGBPToCurrency 
//  which takes in both a currency code ("EUR" or "USD") and an amount of £ to convert.
//  It should, based on which code has been entered, 
//  use one of your previously written functions to return the correct conversion.
//  If an unknown code is entered, it should return null.

function convertGBPToCurrency(currencyCode, pounds) {
  if (currencyCode === 'EUR') {
    return convertGBPtoEUR(pounds);
  } else if (currencyCode === 'USD') {
    return convertGBPtoUSD(pounds);
  } else if (currencyCode !== 'EUR' || 'USD' ) {
    return null;
  }
}