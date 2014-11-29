// Constructor
function Person(name){
	this.name = name;
}

// Here sayHello() is defined on prototype instead of constructor, it will be shared
Person.prototype.sayHello = function () {
	console.log('Hello my name is '+ this.name);
};

var p1 = new Person('Bob');
var p2 = new Person('Alice');

console.log(p1.name);		// Bob
console.log(p2.name);		// Alice

p1.sayHello();				// Hello my name is Bob
p2.sayHello();				// Hello my name is Alice

Person.prototype.favorites = [];

p1.favorites.push('Fast cars');
p2.favorites.push('Manicure');

// Not so good idea as it points to the same Array
// Use another property on Constructor function instead of prototype
console.log(p1.favorites);	// Fast cars, Manicure
console.log(p2.favorites);	// Fast cars, Manicure



// Another syntax instead of repeating Person.prototype.xyz is defining prototype with object literal.

Person.prototype = {
	sayHello: function () {
		console.log('Hi, my name is '+ this.name);
	},
	toString: function () {
		return '[Person ' + this.name + ']';
	}
};

var p3 = new Person('Tom');
p3.sayHello();									// Hi, my name is Tom

console.log(p3 instanceof Person);				// true
console.log(p3.constructor === Person);			// false ! this is side effect of using Object literal !
console.log(p3.constructor === Object);			// true


// One side effect of the above is that the prototype.constructor is overwritten by {..}
// put the constructor back

Person.prototype = {
	constructor: Person,
	sayHello: function () {
		console.log('Hi, my name is '+ this.name);
	},
	toString: function () {
		return '[Person ' + this.name + ']';
	}
};

// Will be retro-effective on p3?
// NO
var p3 = new Person('Tom');
p3.sayHello();									// Hi, my name is Tom

console.log(p3 instanceof Person);				// true
console.log(p3.constructor === Person);			// true
console.log(p3.constructor === Object);			// false
