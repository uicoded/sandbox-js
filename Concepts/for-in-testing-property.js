/*
IN operator to test for object property existence

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// http://www.bennadel.com/blog/1918-Javascript-s-IN-Operator-Does-Not-Work-With-Strings.htm
// http://www.bennadel.com/blog/1724-Using-Javascript-s-IN-Operator-To-Test-For-Object-Property-Existence.htm
*/

var object = {};
var array = [];
var string = "";
var number = new Number( 1 );
var date = new Date();
 

console.log( "Object", ("length" in object) );
console.log( "Array", ("length" in array) );
console.log( "String", ("length" in string) );
console.log( "Date", ("length" in date) );
console.log( "Number", ("length" in number) ); 