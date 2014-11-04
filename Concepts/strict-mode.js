// Non-strict code...
 
(function(){
  "use strict";
  
  // Define your library strictly...
})();
 
// Non-strict code..


// - Deleting a variable, a function, or an argument will result in an error.
var foo = "test";
function test(){}
 
delete foo; 			// Error
delete test; 			// Error
 
function test2(arg) {
    delete arg; 		// Error
}

// - Defining a property more than once in an object literal will cause an exception to be thrown
// Error
{ foo: true, foo: false }

// - Eval is prohibited
// All Errors...
obj.eval = ...
obj.foo = eval;
var eval = ...;
for ( var eval in ... ) {}
function eval(){}
function test(eval){}
function(eval){}
new Function("eval")