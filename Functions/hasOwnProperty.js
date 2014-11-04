/*
Object.hasOwnProperty()

Every object descended from Object inherits the hasOwnProperty method. This method can be used to determine whether an object has the specified property as a direct property of that object; unlike the in operator, this method does not check down the object's prototype chain.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
  http://www.bennadel.com/blog/1919-Javascript-s-hasOwnProperty-Method-Is-More-Consistent-Than-The-IN-Operator.htm


*/

o = new Object();
o.prop = 'exists';

function change() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // returns true
change();
o.hasOwnProperty('prop');   // returns false