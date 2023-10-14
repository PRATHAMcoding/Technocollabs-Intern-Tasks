const kelvin = 293; // Given temperature in Kelvin
const celsius = kelvin - 273; // Convert Kelvin to Celsius
let fahrenheit = celsius * (9/5) + 32; // Calculate Fahrenheit

fahrenheit = Math.floor(fahrenheit); // Round the Fahrenheit value

console.log("The temperature is "+fahrenheit+" TEMPERATURE degrees Fahrenheit.");
document.write(`the temperature is  ${fahrenheit} Temperature degrees fahrenheit`);


const newton = Math.floor(celsius * (33/100)); // Convert Celsius to Newton and round down
document.write(`<br>The temperature is ${celsius} degrees Celsius, ${fahrenheit} degrees Fahrenheit, and ${newton} degrees Newton.`)
console.log(`The temperature is ${celsius} degrees Celsius, ${fahrenheit} degrees Fahrenheit, and ${newton} degrees Newton.`);
