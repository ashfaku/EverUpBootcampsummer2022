bmi = (mass, height) =>
{
	if (height === '0')
		return 0;
	return mass / (height*height);
}
celciusToFarenheit = (celcius) =>
{
	return celcius*(9/5) + 32;
};
farenheitToCelcius = (farenheit) =>
{
	return (farenheit - 32) * (5/9);
}

var bmi1 = bmi(78, 1.69).toFixed(2);
var bmi2 = bmi(92, 1.95).toFixed(2);
console.log(`The BMI of Peter is ${bmi2} ,The BMI of Lucas is ${bmi1} , Lucas's BMI is higher than Peter's BMI that is true`);
console.log(`The BMI of Peter is ${bmi2} ,The BMI of Lucas is ${bmi1} , Peter's BMI is higher than Lucas's BMI that is false`);

if (bmi1 > bmi2)
	console.log(`The BMI of Peter is ${bmi2} ,The BMI of Lucas is ${bmi1} , Lucas's BMI is higher than Peter's BMI`);
else	
	console.log(`The BMI of Peter is ${bmi2} ,The BMI of Lucas is ${bmi1} , Peter's BMI is higher than Lucas's BMI`);

var celcius = 32;
var farenheit = 89.60;
console.log(`The value of ${celcius} celcius degrees is ${celciusToFarenheit(celcius).toFixed(2)} farenheit degrees`);
console.log(`The value of ${farenheit} farenheit degrees is ${farenheitToCelcius(farenheit).toFixed(2)} celcius degrees`);