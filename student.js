// require npm
const prompt = require('prompt');

// student constructor
var Student = function(
	name, gender, grade, GPA, 
	detentions, sleepingInClass, catchPhrase, bus
){
	this.name = name; // name
	this.gender = gender; // gender
	this.grade = grade; // grade (what year they're in)
	this.GPA = GPA; // GPA
	this.detentions = detentions; // number of detentions
	this.sleepingInClass = sleepingInClass; // does the student sleep in class
	this.catchPhrase = catchPhrase; // the studen'ts catchphrase

	// method checks if student is allowed to have fun
	this.canStudentHaveFun = function() {
		// if the student has less than 10 detentions and more than a 2 for his/her GPA...
		if(this.detentions < 10 && this.GPA > 2) {
			// then yes, the student can have fun.
			console.log(this.name + " can have fun!")
			// otherwise...
		} else {
			// nope.
			console.log(this.name + " is not allowed to have fun.");
		}
	};

	// once the student is created, place him or her in the Bus object
	// specified as the last argument in the constructor call
	bus.studentEntersBus.call(bus, this);
};


// a prompt function for creating a student through the console
// bus parameter is needed to place the student in the bus
function prompter(bus) {

	// start the prompt and collect the info we need
	prompt.start();
	prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
		// create the student
		var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase, bus);
		// make shorthand for new student
		var shorthand = bus.studentsOnTheBus[bus.studentsOnTheBus.length-1]
		// show that the prompted student is indeed on the bus
		console.log(shorthand.name + " has been added to the bus");
	})
}

// export the Student constructor and the prompter function
exports.student ={
	construct: Student,
	prompter: prompter
}


