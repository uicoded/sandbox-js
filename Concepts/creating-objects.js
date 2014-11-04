// http://code.tutsplus.com/tutorials/javascript-objects--net-35979

// Create a codyA object using the Object() constructor.
 
var bob = new Object();
bob.living = true;
bob.age = 33;
bob.gender = 'male';
bob.getGender = function () { return bob.gender; };

console.log(bob); // Logs Object {living=true, age=33, gender="male", ...}

/*
 The same cody object is created below, but instead of using the native Object() constructor
 to create a one-off cody, we first define our own Person() constructor that can create a cody object
  (and any other Person object we like) and then instantiate it with "new". 
*/

var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () { return this.gender; };
};

var bobek = new Person(true, 33, 'male');

console.log(bobek); // Logs Object {living=true, age=33, gender="male", ...}

/*
 The main difference between the codyA and codyB objects is not found in the object itself,
 but in the constructor functions used to produce the objects. The codyA object was produced
 using an instance of the Object() constructor. The Person() constructor produced codyB,
  but can also be used as a powerful, centrally defined object "factory" to be used for
  creating more Person() objects. Crafting your own constructors for producing custom objects
  also sets up prototypal inheritance for Person() instances.
*/

/*
The JavaScript language contains nine native (or built-in) object constructors.

	Number()
	String()
	Boolean()
	Object()
	Array()
	Function()
	Date()
	RegExp()
	Error()

JavaScript is mostly constructed from these nine objects (as well as string, number, 
and Boolean primitive values). Understanding these objects in detail is key to taking advantage
of JavaScript’s unique programming power and language flexibility.

The Math object is the oddball here. It's a static object rather than a constructor function,
meaning you cant do this: var x = new Math(). But you can use it as if it has already
been instantiated (e.g., Math.PI). Truly, Math is just an object namespace set up by JavaScript
to house math functions.

The native objects are sometimes referred to as "global objects" since they are the objects
that JavaScript has made natively available for use. Do not confuse the term global object with
the "head" global object that is the topmost level of the scope chain, for example, the window object
in all web browsers.

The Number(), String(), and Boolean() constructors not only construct objects;
they also provide a primitive value for a string, number, and Boolean, depending upon how the constructor
is leveraged. If you call these constructors directly, then a complex object is returned.
If you simply express a number, string, or Boolean value in your code (primitive values like 5, "foo", and true),
then the constructor will return a primitive value instead of a complex object value.

*/

 	// Instantiate an instance for each native constructor using the new keyword.
    var myNumber 	= new Number(23);
    var myString 	= new String('male');
    var myBoolean 	= new Boolean(false);
    var myObject 	= new Object();
    var myArray 	= new Array('foo', 'bar');
    var myFunction 	= new Function("x", "y", "return x*y");
    var myDate 		= new Date();
    var myRegExp 	= new RegExp('\bt[a-z]+\b');
    var myError 	= new Error('Darn!');
 
    // Log/verify which constructor created the object.
    console.log(myNumber.constructor); 		// Logs Number()
    console.log(myString.constructor); 		// Logs String()
    console.log(myBoolean.constructor);		// Logs Boolean()
    console.log(myObject.constructor); 		// Logs Object()
    console.log(myArray.constructor); 		// Logs Array() in modern browsers.
    console.log(myFunction.constructor);	// Logs Function()
    console.log(myDate.constructor);		// Logs Date()
    console.log(myRegExp.constructor);		// Logs RegExp()
    console.log(myError.constructor);		// Logs Error()
 
/*
Creating Shorthand or Literal Values from Constructors

JavaScript provides shortcuts called "literals" for manufacturing most of the native object values
without having to use new Foo() or new Bar(). For the most part, the literal syntax accomplishes
the same thing as using the new operator. The exceptions are: Number(), String(), and Boolean()
see the notes after the following sample.
*/

 	var myNumber = new Number(23); 		// An object.
    var myNumberLiteral = 23; 			// Primitive number value, not an object.
 
    var myString = new String('male');  // An object.
    var myStringLiteral = 'male'; 		// Primitive string value, not an object.
 
    var myBoolean = new Boolean(false); // An object.
    var myBooleanLiteral = false; 		// Primitive boolean value, not an object.
 
    var myObject = new Object();
    var myObjectLiteral = {};
 
    var myArray = new Array('foo', 'bar');
    var myArrayLiteral = ['foo', 'bar'];
 
    var myFunction = new Function("x", "y", "return x*y");
    var myFunctionLiteral = function (x, y) { return x * y };
 
    var myRegExp = new RegExp('\bt[a-z]+\b');
    var myRegExpLiteral = /\bt[a-z]+\b/;
 
    // Verify that literals are created from same constructor.
    console.log(myNumber.constructor, myNumberLiteral.constructor);
    console.log(myString.constructor, myStringLiteral.constructor);
    console.log(myBoolean.constructor, myBooleanLiteral.constructor);
    console.log(myObject.constructor, myObjectLiteral.constructor);
    console.log(myArray.constructor, myArrayLiteral.constructor);
    console.log(myFunction.constructor, myFunctionLiteral.constructor);
    console.log(myRegExp.constructor, myRegExpLiteral.constructor);
 
/*
When using literal values for String(), Number(), and Boolean(), 
an actual complex object is never created until the value is treated as an object.
In other words, you are dealing with a primitive data type until you attempt to use
methods or retrieve properties associated with the constructor 
(e.g., var charactersInFoo = 'foo'.length). When this happens, JavaScript creates a wrapper object
for the literal value behind the scenes, allowing the value to be treated as an object.
Then, after the method is called, JavaScript discards the wrapper object and the value
returns to a literal type. This is why string, number, and Boolean are considered primitive
(or simple) data types.
*/