function bmi(mass, height)
{
	if (height === '0')
		return 0;
	return mass / (height*height);
}

var mass = prompt("Please give me Lucas's mass.");
var height = prompt("Please give me Lucas's height");

var mass1 = prompt("Please give me Peter's mass.");
var height1 = prompt("Please give me Peter's weight");

var bmi1 = bmi(mass, height);
var bmi2 = bmi(mass1, height1);
console.log(bmi1);
console.log(bmi2);
if (bmi1 > bmi2)
	console.log(`The BMI of Peter is ${bmi2} ,The BMI of Lucas is ${bmi1} , Lucas's BMI is higher than Peter's BMI`);
else	
	console.log(`The BMI of Peter is ${bmi2} ,The BMI of Lucas is ${bmi1} , Peter's BMI is higher than Lucas's BMI`);
