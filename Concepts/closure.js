/*
Closure

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

Closures are functions that refer to independent (free) variables.

In short, variables from the parent function of the closure remain bound from the parent's scope.
*/
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function
    }
    displayName();
}
init();
/*
init() creates a local variable name and then a function called displayName().
displayName() is the inner function (a closure) — it is defined inside init(),
and only available within the body of that function . Unlike init(), displayName() has no
local variables of its own, and instead reuses the variable name declared in the parent function.

Run the code and see that this works.
This is an example of lexical scoping: in JavaScript, the scope of a variable is defined by its location
within the source code (it is apparent lexically) and nested functions have access to variables
declared in their outer scope.
*/

/*
http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

Simply accessing variables outside of your immediate lexical scope creates a closure.

When you declare a function in JavaScript it has forever access to all the variables and functions
that were available in the line before that function declaration. The function and all the outer variables
and functions that it has access to is what we call a closure
*/

function foo(x) {
  var tmp = 3;
  function bar(y) {
    console.log(x + y + (++tmp));
  }
  bar(10);
}
foo(2);			// 16

/*
bar can access the x which was defined as an argument to foo, and it can also access tmp from foo.
*/

function foo(x) {
  var tmp = 3;
  return function (y) {
    console.log(x + y + (++tmp));
  }
}
var bar = foo(2); 		// bar is now a closure.
bar(10);				// 16
bar(10);				// 17

/*
The above function will also alert 16, because bar can still refer to x and tmp, even though
it is no longer directly inside the scope.

However, since tmp is still hanging around inside bar's closure, it is also being incremented.
It will be incremented each time you call bar.
*/

var a = 10;
function test() {
  console.log(a); // will output 10
  console.log(b); // will output 6
}
var b = 6;
test();

/*
When a Javascript function is invoked, a new execution context is created.
Together with the function arguments and the parent object, this execution context
also receives all the variables declared outside of it (in the above example, both 'a' and 'b').

It is possible to create more than one closure function, either by returning a list of them
or by setting them to global variables. All of these will refer to the same x and the same tmp,
they don't make their own copies.

More..

Here the number x is a literal number. As with other literals in JavaScript, when foo is called,
the number x is copied into foo as its argument x.

On the other hand, JavaScript always uses references when dealing with Objects. If say,
you called foo with an Object, the closure it returns will reference that original Object!
*/

function foo(x) {
  var tmp = 3;
  return function (y) {
    alert(x + y + tmp);
    x.memb = x.memb ? x.memb + 1 : 1;
    alert(x.memb);
  }
}
var age = new Number(2);
var bar = foo(age); // bar is now a closure referencing age.
bar(10);

/*
As expected, each call to bar(10) will increment x.memb. What might not be expected,
is that x is simply referring to the same object as the age variable! After a couple of calls to bar,
age.memb will be 2! This referencing is the basis for memory leaks with HTML objects.
*/

/*
More points:

Closure is:

 - Whenever you use function inside another function, a closure is used.
 - Whenever you use eval() inside a function, a closure is used. The text you eval can reference local
  variables of the function, and within eval you can even create new local variables by using eval('var foo = …')
 - When you use new Function(…) (the Function constructor) inside a function, it does not create a closure.
 (The new function cannot reference the local variables of the outer function.)
 - A closure in JavaScript is like keeping a copy of all the local variables, just as they were when a function exited.
 - It is probably best to think that a closure is always created just on entry to a function, and the local variables
  are added to that closure.
 - A new set of local variables is kept every time a function with a closure is called
  (given that the function contains a function declaration inside it, and a reference to that inside function
   is either returned or an external reference is kept for it in some way).

*/

function sayHello2(name) {
    var text = 'Hello ' + name; 				// Local variable
    var sayAlert = function() { alert(text); }
    return sayAlert;
}
say2 = sayHello2('Bob');
say2(); 										// alerts "Hello Bob"

/* The above code has a closure because the anonymous function function() { alert(text); } is declared
 inside another function, sayHello2().

 In JavaScript, if you use the function keyword inside another function, you are creating a closure.

In most other common languages after a function returns, all the local variables are no longer accessible
because the stack-frame is destroyed.

In JavaScript, if you declare a function within another function, then the local variables can remain accessible
after returning from the function you called. This is demonstrated above, because we call the function say2()
after we have returned from sayHello2(). Notice that the code that we call references the variable text,
which was a local variable of the function sayHello2().

function() { alert(text); } // Output of say2.toString();

Click the button above to get JavaScript to print out the code for the anonymous function.
You can see that the code refers to the variable text. The anonymous function can reference text which holds
the value 'Bob' because the local variables of sayHello2() are kept in a closure.

The magic is that in JavaScript a function reference also has a secret reference to the closure
it was created in — similar to how delegates are a method pointer plus a secret reference to an object.
*/

function make_calculator() {
    var n = 0;  // this calculator stores a single number n
    return {
                  add : function (a) { n += a; return n; },
             multiply : function (a) { n *= a; return n; }
           };
}

first_calculator = make_calculator();
second_calculator = make_calculator();

first_calculator.add(3);                   // returns 3
second_calculator.add(400);                // returns 400

first_calculator.multiply(11);             // returns 33
second_calculator.multiply(10);            // returns 4000

/*
Each call to make_calculator creates a new local variable n, which continues to be usable by that
calculator's add and multiply functions long after make_calculator returns.

If you are familiar with stack frames, these calculators seem strange: How can they keep accessing n
after make_calculator returns? The answer is to imagine that JavaScript doesn't use "stack frames",
but instead uses "heap frames", which can persist after the function call that made them returns.

Inner functions like add and multiply, which access variables declared in an outer function**, are called closures.

*/

/*
The kitchen is a closure that has a local variable, called trashBags. There is a function inside the kitchen
called getTrashBag that gets one trash bag and returns it.
*/
function makeKitchen () {
  var trashBags = ['A', 'B', 'C']; // only 3 at first

  return {
    getTrashBag: function() {
      return trashBags.pop();
    }
  };
}

var kitchen = makeKitchen();

kitchen.getTrashBag(); // returns trash bag C
kitchen.getTrashBag(); // returns trash bag B
kitchen.getTrashBag(); // returns trash bag A

/*
Further points:
 - Each time makeKitchen() is called, a new closure is created with its own separate trashBags.
 - The trashBags variable is local to the inside of each kitchen and is not accessible outside,
  but the inner function on the getTrashBag property does have access to it.
 - Every function call creates a closure, but there would be no need to keep the closure around
  unless an inner function, which has access to the inside of the closure, can be called from outside the closure.
  Returning the object with the getTrashBag function does that here.
*/
