// Bus constructor
var Bus = function(driverName, color, gas) {
	// storage for the students in the bus
	this.studentsOnTheBus = [];
	// bus details 
	this.driverName = driverName; // name of driver
	this.color = color; // color of bus
	this.gas = gas; // how many gallons of gas are in the bus

	// busChatter: make each student shout his/her catchphrase
	this.busChatter = function() {
		// go through each student
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			// each student shouts his/her catchphrase
			console.log(this.studentsOnTheBus[i].catchPhrase);
		}
	}

	// place student in the bus
	this.studentEntersBus = function(student) {
		// push student into the array on the bus
		this.studentsOnTheBus.push(student);
	}

	// [BONUS 1] getOut: kick a student off the bus.
	this.getOut = function(student) {
		// save the index where the specified student shows up
		var index = this.studentsOnTheBus.indexOf(student);
		// if we find the student in the array (and thus index isn't -1)
		if (index != -1) {
			// tell the user we're removing the student
			console.log("Removing " + student.name + " from the Bus...");
			// remove the student
			this.studentsOnTheBus.splice(index, 1);
			// let the user know it worked
			console.log("Student removed!");
		}
	}
}

// export
exports.bus = {
	construct: Bus
}