/*
FUNCTION DECLARATIONS loads before any code is executed.
  function bar() { ... }
FUNCTION EXPRESSIONS loads only when the interpreter reaches that line of code.
  var bar = function() { ... }

http://kangax.github.io/nfe/#expr-vs-decl
http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascript

More:

FUNCTION EXPRESSION:
  -  NAMED FUNCTION EXPRESSION
    var foo = function bar() { ... }

  -  ANONYMOUS FUNCTION EXPRESSION
    var foo = function() { ... }

foo() can be called only after creation.

IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE)
(function() { ... }());
*/

// Function Expression
// ERROR! foo wasn't loaded yet
alert(foo());
var foo = function() { return 5; } 

// Function Declaration
// Alerts 5. Declarations are loaded before any code can run. Function hoisting
alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; } 
