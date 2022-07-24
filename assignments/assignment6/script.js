const peter = {
		firstName: "John",
		lastName: "Doe",
		birthYear: 1997,
		jobTitle: "student",
		score: [100, 90, 80, 95],
		tasks: 0, // ??? Didn't know
		calAvgscore: function() {
			const initialValue = 0;
			return sumWithInitial = this.score.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
				initialValue
			)/this.score.length;
		},
		findMaxscore: function() {
			if (this.score.length == 0)
				return "none";
			var max = this.score[0];
			for (let i = 1; i < this.score.length; i++)
				max = Math.max(max, this.score[i]);
			return max;
		},
		showsummary: function() {
			this.tasks = this.score.length;
			return `${this.firstName} ${this.lastName} has completed ${this.tasks} tasks, and ${this.firstName}'s average score is ${this.calAvgscore()}, ${this.firstName}'s highest score is ${this.findMaxscore()}`;
		}
};
console.log(peter.showsummary());
celciusToFarenheit = (celcius) =>
{
	return celcius*(9/5) + 32;
};
//var celcius = prompt("Please give me a celcius degree value between -88 and 58.");
var celcius = 12;
while (isNaN(celcius) || celcius < -88 || celcius > 58)
{
	alert("This is not a valid input. Please try again.");
	celcius =  prompt("Please give me an actual celcius degree value between -88 and 58.");
}
console.log(`With your celcius input of ${celcius}, it converts to ${celciusToFarenheit(celcius).toFixed(2)} degrees farenheit.`);


