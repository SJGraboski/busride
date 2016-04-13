// require npm
const prompt = require('prompt');

// require student and bus
var student = require('./student.js');
var bus = require('./bus.js');

// make shorthands for imported constructors and functions
var Student = student.student.construct;
var Bus = bus.bus.construct;
var prompter = student.student.prompter;


// create the bus
var theBus = new Bus("Bill", "Yellow", 22);

// add 20 students, push them into the bus
var joey = new student.student.construct('Joey', 'boy', 'freshman', 3.4, 2, false, "JOEY JOEY JOEY!", theBus);
var joey2 = new student.student.construct('Joey 2', 'boy', 'freshman', 3.4, 2, false, "I'M NOT JOEY!", theBus);
var honk = new student.student.construct('honk', 'girl', 'freshman', 4.0, 9, false, "HONK HONK!", theBus);
var okay = new student.student.construct('okay', 'boy', 'freshman', 2, 5, false, "OKAY!", theBus);
var yeah = new student.student.construct('yeah', 'boy', 'freshman', 3.3, 3, true, "YEAH!", theBus);
var joey3 = new student.student.construct('Joey 3', 'boy', 'sophomore', 3.7, 2, false, "JOEY JOEY JOEY", theBus);
var bjork = new student.student.construct('Bjork', 'girl', 'sophomore', 4, 8, false, "*that weird throat sound Bjork makes*", theBus);
var bjork2 = new student.student.construct('Bjork (again)', 'girl', 'sophomore', 4, 9, false, "I...am...grateful...grapefruit!", theBus);
var hank = new student.student.construct('Hank', 'grown man', 'senior', 2.4, 15, false, "I sell propane and propance accessories.", theBus);
var wooo = new student.student.construct('Wooo', 'girl', 'sophomore', 3.2, 3, false, "WOOO!", theBus);
var echh = new student.student.construct('Echh', 'boy', 'junior', 3.6, 7, true, "ECHH!", theBus);
var hey = new student.student.construct('Hey', 'girl', 'junior', 1.6, 4, true, "HEY!", theBus);
var ellis = new student.student.construct('Ellis', 'boy', 'junior', 1, 100, false, "My name is Ellis. Riding on the telis", theBus);
var uriah = new student.student.construct("Uriah", 'boy', 'junior', 0.3, 29384, false, "BUGHBFGUHBFG!", theBus);
var yo = new student.student.construct("Yo", "girl", 'senior', 1.3, 2, true, "YO!", theBus);
var buh = new student.student.construct("buh", "girl", 'senior', 3.1, 2, true, "Buhbuhbuh buh buh buhbuhhh buhhhh, BUH BUH, buhbuhbuh buh buh buhbuhh, --", theBus);
var yee = new student.student.construct("yee", "boy", 'senior', 3.1, 2, true, "YeeEEee!", theBus);
var eddy = new student.student.construct("Eddy", "boy", "senior", 3.4, 7, true, "EDDY EDDY EDDY EDDY EDDY!", theBus);
var hal = new student.student.construct('Hal', 'girl', 'senior', 4, 0, false, "WOMP!", theBus);
var jack = new student.student.construct('Jack', 'girl', 'senior', 3.7, 7, false, "Hi my name is Jack.", theBus);

// call each student's name
theBus.busChatter();

// kick wooo off the bus
theBus.getOut(wooo);

// prompt to add another student
prompter(theBus);

