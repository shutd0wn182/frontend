var localize = require('./en');

function User(name) {
	this.name = name;
}

User.prototype.showName = function(){
	console.log(localize.greet + ' ' +this.name)
};

module.exports = User;