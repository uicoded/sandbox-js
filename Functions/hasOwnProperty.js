/*
Object.hasOwnProperty()

Every object descended from Object inherits the hasOwnProperty method. This method can be used to determine
whether an object has the specified property as a direct property of that object; unlike the in operator,
this method does not check down the object's prototype chain.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
  http://www.bennadel.com/blog/1919-Javascript-s-hasOwnProperty-Method-Is-More-Consistent-Than-The-IN-Operator.htm


*/

var o1 = {};
o1.prop = 'exists';

o1.hasOwnProperty('prop');   // returns true
delete o1.prop;
o1.hasOwnProperty('prop');   // returns false

/* compare with in operator which checks for both own properties and prototype properties
*/
o1.prop = 'exists again';

('prop' in o1)				// true
o1.hasOwnProperty('name')	// true

('toString' in o1)				// true
o1.hasOwnProperty('toString')	// false
