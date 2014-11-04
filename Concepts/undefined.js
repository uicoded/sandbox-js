/*
The global undefined property represents the value undefined.

in browser try Window.undefined

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
*/

var x;
if (x === undefined) {
   true;
}
else {
   false;
}

// One reason to use typeof is that it does not throw an error if the variable has not been defined.

// x has not been defined before
if (typeof x === 'undefined') { // evaluates to true without errors
	true;
}

if(x === undefined){ // throws a ReferenceError
	true;
}

/*
http://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined

In short; undefined is where no notion of the thing exists; it has no type,
and it's never been referenced before in that scope;
null is where the thing is known to exist, but it's not known what the value is.
*/