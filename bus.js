var Bus = function(driverName, color, gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.busChatter = function() {
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			console.log(this.studentsOnTheBus[i].catchPhrase);
		}
	}
	this.getOut = function(obj) {
		var index = this.studentsOnTheBus.indexOf(obj);
		if (index != -1) {
			console.log("Removing " + obj.name + " from the Bus...");
			this.studentsOnTheBus.splice(index, 1);
			console.log("Student removed!");
		}
	}
}

Bus.prototype.studentEntersBus = function(student) {
	this.studentsOnTheBus.push(student);
}

// export
exports.bus = {
	construct: Bus
}