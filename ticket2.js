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