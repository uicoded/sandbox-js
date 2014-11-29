/* Call vs Apply function
 *
 * call() accepts an argument list, apply() accepts a single array of arguments.
 *
 *
 * http://devdocs.io/javascript/global_objects/function/call
 */


// Using call to chain constructors for an object (constructor stealing)
function Product(name, price) {
	this.name = name;
	this.price = price;

	if (price < 0) {
		throw new RangeError('Cannot create product ' +
			this.name + ' with a negative price');
	}

	return this;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
	Product.call(this, name, price);
	this.category = 'toy';
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);


// Using call to invoke an anonymous function
var animals = [
	{ species: 'Lion', name: 'King' },
	{ species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
	(function (i) {
		this.print = function () {
			console.log('#' + i + ' ' + this.species
				+ ': ' + this.name);
		}
		this.print();
	}).call(animals[i], i);
}
