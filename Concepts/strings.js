/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


String Literal:

'string text'
"string text"
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"

Escapes:

	Code	Output
	\'		single quote
	\"		double quote
	\\		backslash
	\n		new line
	\r		carriage return
	\t		tab
	\b		backspace
	\f		form feed
	\u....	unicode codepoint


String primitives vs String objects:

JavaScript distinguishes between String objects and primitive string values. (The same is true of Boolean and Numbers.)
*/
var s_prim = "foo";
var s_obj = new String(s_prim);
// var s_o = String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"
// console.log(typeof s_o);    // Logs "string"

console.log(s_prim);        // Logs "foo"
console.log(s_obj);         // Logs foo { 0="f", 1="o", 2="o"}
// console.log(s_o);           // Logs "foo"

s_prim.toUpperCase();		// "FOO" works
s_obj.toUpperCase();		// "FOO" works
// s_o.toUpperCase();		    // "FOO" works


/*
READ MORE:

The Number(), String(), and Boolean() constructors not only construct objects;
they also provide a primitive value for a string, number, and Boolean, depending upon how the constructor is leveraged.
If you call these constructors directly, then a complex object is returned.
If you simply express a number, string, or Boolean value in your code (primitive values like 5, "foo", and true),
 then the constructor will return a primitive value instead of a complex object value.
*/

/*
Comparing Strings:
*/

var a = "a";
var b = "b";

(a < b) // true

/*
Character access:
*/
'car'.charAt(1); // returns "a"
'car'[1];		 // since ECMA5 - returns "a"
