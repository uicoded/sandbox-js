/**
 * A prototype ia an object intended to model other objects.
 * It is similar to class in way that you can construct object instances, but different in sence that
 * it is object itself rather than a template.
 *
 * There are two ways that prototype can be used:
 *  - You can delegate access to a single , shared prototype object (called a delegate)
 *  - Or you can make clones of the prototype
 */


var switchProto = {
	isOn: function isOn(){
		return this.state;
	},
	toggle: function toggle() {
		this.state = !this.state;
		return this;
	},
	state: false
};

var s1 = Object.create(switchProto);
var s2 = Object.create(switchProto);

console.log( s1.toggle().isOn() );			// true
console.log( s2.isOn() );					// false (instance safe - did not change)

/**
 * Sharing state (non-method data) on a prototype is considered anti-pattern.
 * Because accidental mutations of shared properties are a common source of bugs.
 *
 * Here, when you change a sub-property of meta (name), it mutates the object attached to the prototype, but
 * when you replace the whole meta object with a new object, it overwrites the property for that instance only.
 */
var switchProto = {
	isOn: function isOn(){
		return this.state;
	},
	toggle: function toggle() {
		this.state = !this.state;
		return this;
	},
	state: false,
	meta: {
		name: 'Light switch'
	}
};

var s1 = Object.create(switchProto);
var s2 = Object.create(switchProto);

s2.meta.name = 'Braker switch';		// Object and Array mutations are shared
console.log(s2.meta.name);			// Braker switch
console.log(s1.meta.name);			// Braker switch

s1.meta = { name: 'Power switch'};	// property replacement is instance specific
console.log(s1.meta.name);			// Power switch
console.log(s2.meta.name);			// Braker switch


/**
 * Remember:
 * Object literal, automatically extends the default Object
 */
var primer = {
	title: 'New England English Primer'
};

var prototype = Object.getPrototypeOf(primer);
console.log(prototype === Object.prototype);

// Object literal, same as
var primer = Object.create(Object.prototype, {
	title: {
		configurable: true,
		enumerable: true,
		value: 'New England English Primer',
		writable: true
	}
});







/**
 * ES < 5 you can use Object.create() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */
if (typeof Object.create != 'function') {
	Object.create = (function() {
		var Object = function() {};
		return function (prototype) {
			if (arguments.length > 1) {
				throw Error('Second argument not supported');
			}
			if (typeof prototype != 'object') {
				throw TypeError('Argument must be an object');
			}
			Object.prototype = prototype;
			var result = new Object();
			Object.prototype = null;
			return result;
		};
	})();
}
