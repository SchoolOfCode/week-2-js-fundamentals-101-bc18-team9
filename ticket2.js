// Develop a JavaScript function displayTemperatureInCelsius 
// that takes in a numerical Fahrenheit temperature reading and converts it to Celsius,
// returning the number representing the Celsius value.

function displayTemperatureInCelsius (f) {
let celcius = (f - 32) * 5/9
return celcius;
}

//Implement another function displayTemperatureInFahrenheit that performs the inverse operation.

function displayTemperatureInFahrenheit (c) {
    let fahrenheit = (c * 9/5 + 32 )
    return fahrenheit;
}

// Create a function toggleTemperatureDisplay that returns either Celsius or Fahrenheit depending on which was the last returned 
// (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). 
// Start with a default of the last returned format being Celsius.

let lastReturned = 'Celsius';

function toggleTemperatureDisplay() {
 if (lastReturned === 'Fahrenheit') {
    lastReturned = 'Celsius'
 } else if (lastReturned === 'Celsius') {
    lastReturned = 'Fahrenheit'
 }

 return lastReturned;
}