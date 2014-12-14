/*
 Constructor Inheritance - Principles of OO JS p:72

 Almost every function in JavaScript has a prototype property that can be modified or replaced.

 This prototype property is automatically assigned to be a new generic object that inherits from Object.prototype
 and has a single own property called constructor.
*/

// Constructor function
function Person(){
	// initialization
}

// JavaScript does this behind the scenes
Person.prototype = Object.create(Object.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: Person
	}
});

/**
 * Bias - not really
 *
 * The constructor make you think OO classical style and becomes analogous to a class.
 * Two best features of JS are ignored: dynamic object extension and prototypal inheritance.
 * The two combined create much more powerful and flexible way to reuse code than classical inheritance!
 *
 * Constructors are waste of time and energy (confirm: Programming JS Applications p:51)
 * They are completely unnecessary.
 *
 * Continue to see some factory pattern.
 */


/*
 Object Attributes - JS Definite Guide p:135

 In ECMAScript 5, you can query the prototype of any object by passing that object to Object.getPrototypeOf().
 (There is no equivalent function in ECMAScript 3, but it is often possible to determine the prototype of an object o
 using the expression o.constructor.prototype.) Objects created with a new expression usually inherit a constructor
 property that refers to the constructor function used to create the object. And, as described above,
 constructor functions have a prototype property that specifies the prototype for objects created using that constructor.
 */

// Create a p1 object using the Object() constructor.

var p1 = new Object();
p1.living = true;
p1.age = 33;
p1.gender = 'male';
p1.getGender = function () { return p1.gender; };

console.log(p1); 								// Logs Object {living=true, age=33, gender="male", ...}
console.log(Object.getPrototypeOf(p1));			// Object {}
console.log(p1.constructor);					// function Object()

// Create a p2 object using Object literal. All objects created by object literals have the same prototype object,
// and we can refer to this prototype object in JavaScript code as Object.prototype.

var p2 = {
	living: true,
	age: 23,
	gender: 'male',
	getGender: function () { return this.gender}
};

console.log(p2); 								// Logs Object {living=true, age=23, gender="male", ...}
console.log(Object.getPrototypeOf(p2));			// Object {}
console.log(p2.constructor);					// function Object()


/*
 The same p3 object is created below, but instead of using the native Object() constructor
 to create a one-off p3, we first define our own Person() constructor that can create a p3 object
 (and any other Person object we like) and then instantiate it with "new".
 */

var Person = function (living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function () { return this.gender; };
};

var p3 = new Person(true, 13, 'male');

console.log(p3); 							// Logs Object {living=true, age=13, gender="male", ...}
console.log(Object.getPrototypeOf(p3));		// Object {}
console.log(p3.constructor);				// function Person()
