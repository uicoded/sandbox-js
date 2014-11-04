/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

Items on the prototype chain are not listed
*/

var arr = ["a", "b", "c"];
print(Object.getOwnPropertyNames(arr).sort()); // prints "0,1,2,length"

// Array-like object
var obj = { 0: "a", 1: "b", 2: "c"};
print(Object.getOwnPropertyNames(obj).sort()); // prints "0,1,2"

// Printing property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  print(val + " -> " + obj[val]);
});
// prints
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; }, enumerable: false } });
my_obj.foo = 1;

print(Object.getOwnPropertyNames(my_obj).sort()); // prints "foo, getFoo"

//Items on the prototype chain are not listed

/*
If you want only the enumerable properties, see Object.keys or use a for...in loop 
(although note that this will return enumerable properties not found directly upon
that object but also along the prototype chain for the object unless the latter
is filtered with hasOwnProperty()).
*/

function ParentClass () {
}
ParentClass.prototype.inheritedMethod = function () {
};

function ChildClass () {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function () {
};

alert(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
)