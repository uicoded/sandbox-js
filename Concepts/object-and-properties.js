/* Objects and Properties */

// ECMAScript 5
// http://ejohn.org/blog/ecmascript-5-objects-and-properties/
// https://github.com/es-shims/es5-shim/blob/master/es5-shim.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// New Methods:
// Object.preventExtensions( obj );  // locks down the object and prevents future property addition
// Object.isExtensible( obj );       // check the current extensibility status


var obj = {};
 
obj.id = 123;
console.log( obj.id ); 						// 123
console.log( Object.isExtensible( obj ) ); 	// true
 
Object.preventExtensions( obj );
obj.name = "Yellow Corn"; 				// Exception in strict mode
console.log( Object.isExtensible( obj ) );	// false

var obj = { foo: "test" };
console.log(JSON.stringify( 
  Object.getOwnPropertyDescriptor( obj, "foo" )
));
// returns:
// {"configurable":true,"enumerable":true,"value":"test","writable":true}

// New Method:
// Object.defineProperty( obj, prop, desc )  // Define a new property on an object (or change the descriptor of an existing property)

var obj = {};
 
Object.defineProperty( obj, "value", {
  value: true,
  writable: false,
  enumerable: true,
  configurable: true
});
 
(function(){
  var name = "Yellow Corn";
  
  Object.defineProperty( obj, "name", {
    get: function(){ return name; },
    set: function(value){ name = value; }
  });
})();
 
console.log( obj.value )				// true
console.log( obj.name );				// Yellow Corn
 
obj.name = "White Corn";
console.log( obj.name );				// White Corn
 
for ( var prop in obj ) {
  console.log( prop );
}										// should print name, value
 
obj.value = false; 						// Exception if in strict mode
 
Object.defineProperty( obj, "value", {
  writable: true,
  configurable: false
});
 
obj.value = false;
console.log( obj.value );				// false
delete obj.value; 						// Exception

// -------------------------------------------------------------- //
// More Examples:
// http://open.blogs.nytimes.com/2013/04/02/using-ecmascript-5-objects-and-properties/
// -------------------------------------------------------------- //

// Regular Constructor Function - properties and methods can be overwritten
function Dog(name, age) {
    this.name = name;
    this.age = age;
}
var alik = new Dog("Alik",3);
alik.age = 4;


// Warranted you need more, use ES5 Object.defineProperties and maybe add getter and setter for age.
function Dog(name, age) {

	Object.defineProperties(this, {
	    name: {
	        value: name,
	        enumerable: true
	    },
	    age: {
	        set: function (value) {
	            value = parseInt(value, 10);
	            if (isNaN(value)) throw new Error("Value set on age is not a number");
	            age = value;
	        },
	        get: function () {
	            return age;
	        },
	        enumerable: true
	    }
	});
}