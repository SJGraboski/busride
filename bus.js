var Bus = function( driverName, color, gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(student) {
		this.studentsOnTheBus.push(student);
	}
	this.busChatter(){
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			console.log(this.studentsOnTheBus[i].catchPhrase);
		}
	}
}

// export
exports.bus = {
	construct: Bus
}