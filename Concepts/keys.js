/*
The in operator returns true if the specified property is in the specified object.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
	http://www.bennadel.com/blog/1918-Javascript-s-IN-Operator-Does-Not-Work-With-Strings.htm
	http://www.bennadel.com/blog/1724-Using-Javascript-s-IN-Operator-To-Test-For-Object-Property-Existence.htm
*/

var object = {};
var array = [];
var string = "";
var number = new Number( 1 );
var date = new Date();

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

The Object.keys() method returns an array of a given object's own enumerable properties,
in the same order as that provided by a for...in loop (the difference being that a for-in loop
enumerates properties in the prototype chain as well).
*/

var arr = ["a", "b", "c"];
alert(Object.keys(arr)); // will alert "0,1,2"

// array like object
var obj = { 0 : "a", 1 : "b", 2 : "c"};
alert(Object.keys(obj)); // will alert "0,1,2"

// array like object with random key ordering
var an_obj = { 100: "a", 2: "b", 7: "c"};
alert(Object.keys(an_obj)); // will alert "2, 7, 100"

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo : { value : function () { return this.foo } } });
my_obj.foo = 1;

alert(Object.keys(my_obj)); // will alert only foo

// If you want all properties, even not enumerables, see Object.getOwnPropertyNames 
// (Items on the prototype chain are not listed)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames