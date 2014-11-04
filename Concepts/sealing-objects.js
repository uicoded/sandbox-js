// Sealing Objects

// Object.seal() Prevents new methods from being added to/removed from the prototype
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/seal
Object.seal(Bulldog.prototype)
Bulldog.prototype.foo = function () {};
// TypeError: Can't add property foo, object is not extensible

// Constants
var CONST: {
    PI: Math.PI,
    FOO: "bar"
};
Object.freeze(CONST);