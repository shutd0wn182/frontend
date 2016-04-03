var User = require('./user');

function run() {
	var person1 = new User('John');
	var person2 = new User('Andy');

	person1.showName();
	person2.showName();
}

if(module.parent){
	exports.run = run;
}else{
	run();
}
