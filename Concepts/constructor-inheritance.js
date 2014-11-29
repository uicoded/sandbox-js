/*
 * Constructor Inheritance - Principles of OO JS p:73
 *
 * Changing prototype chain
 */

function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}
Rectangle.prototype.getArea = function () {
	return this.length * this.width;
};
Rectangle.prototype.toString = function () {
	return "[Rectangle " + this.length + "x" + this.width + "]";
};
// inherits from Rectangle
function Square(size) {
	this.length = size;
	this.width = size;
}

// Choose
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

// Or
Square.prototype = Object.create(Rectangle.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: Square,
		writable: true
	}
});
// EndOf Choose


// Choose
Square.prototype.toString = function () {
	return "[Square " + this.length + "x" + this.width + "]";
};

// Or call and adjust the supertype method
Square.prototype.toString = function () {
	var text = Rectangle.prototype.toString.call(this);
	return text.replace('Rectangle', 'Square');
};
// EndOf Choose

// finally do something
var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea());		// 50
console.log(square.getArea());		// 36
console.log(rect.toString());		//"[Rectangle 5x10]"
console.log(square.toString());		//"[Square 6x6]"

console.log(rect instanceof Rectangle);		// true
console.log(rect instanceof Object);		// true
console.log(square instanceof Square);		// true
console.log(square instanceof Rectangle);	// true
console.log(square instanceof Object);		// true
