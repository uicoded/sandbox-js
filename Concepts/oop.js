/* Objects from OOP 

Why OOP
  * Maintainable & Scalable
  * Model real world - Separation of concern

OOP Principles

  + Inheritance

  + Polymorphism

  + Encapluslation
  	Mechanism to limit access to object inner components.
  	Do you need something ask (call object's method, get answer)
  	-> Protect variables from unwanted change

*/

/* JavaScript has Prototype based inheritance */


/*
  Private data in JavaScript
   
   a) naming convention 
 */

 function Human(gender){
 	//Private
 	this._age = 0;
 	this._gender = gender || "M";

 	//Public
 	this.grow = function(){
 		this._age++;
 	};
 }
 // Does not restrict anything _age, _gender accessible
 var adam = new Human();
 adam.grow();
 adam._age; // 1

 /*
     a) function scope
 */

 function Human(gender){
 	//Private
 	var age = 0;
 	var gender = gender || "M";

 	//Priviledged Method
 	this.grow = function(){
 		age++;
 	};
 	//Public Method
 	this.getAge = function(){
 		return age;
 	}
 }
 // Starts to be verbose like Java
 var adam = new Human();
 adam.grow(); 
 //adam.age;        undefined Now hidden in function scope
 adam.getAge();

/* 

	c) Module Pattern

Go next to see patterns/module.js
*/
 function Human(gender){
 	//Private
 	var age = 0;
 	var gender = gender || "M";

 	return {
 		grow: function(){
 			age++;
 		},
 		age: age
 	}
 }




/*
http://ejohn.org/blog/ecmascript-5-objects-and-properties/
A new feature of ECMAScript 5 is that the extensibility of objects can now be toggled. Turning off extensibility can prevent new properties from getting added to an object.

ES5 provides two methods for manipulating and verifying the extensibility of objects.

Object.preventExtensions( obj )
Object.isExtensible( obj )

preventExtensions locks down an object and prevents and future property additions from occurring. isExtensible is a way to determine the current extensibility of an object.

Example Usage:
var obj = {};
 
obj.name = "John";
print( obj.name );                     // John
 
print( Object.isExtensible( obj ) );   // true
Object.preventExtensions( obj );
 
obj.url = "http://ejohn.org/";         // Exception in strict mode
print( Object.isExtensible( obj ) );   // false

 */