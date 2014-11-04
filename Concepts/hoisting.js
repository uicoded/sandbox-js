/**
Hoisting
*/

/*
http://code.tutsplus.com/tutorials/quick-tip-javascript-hoisting-explained--net-15092

Variables are hoisted to the top of their containing variable scope
*/

var my_var = "my value";
// alert(my_war);					// OK "my_value"

(function(){
	alert(my_var);					// undefined ? why
	var my_var = "local value";		// because this declaration
	alert(my_var);					// "local value"
})();

// now try it again and comment the var my_var declaration

(function(){
	alert(my_var);					// "my value"
	/* var my_var = "local value"; */
	alert(my_var);					// "my value"
})();

// this will happen behind the scene, that is why you should declare it yourself 
// also in Good Parts

(function(){
	var my_var;						// this happens behind the scene
	alert(my_var);					// this is why my_var here is undefined
	my_var = "local value";         // now it treats as already defined my_war
	alert(my_var);					// "my value"
})();

// hoisted function

(function(){
	newFunciton();					// called even though not defined yet
									// returns "New Function"
									// the function declaration was hoisted to the top

	// function declaration
	function newFunction(){
		alert("New Function Declaration");
	}

})();

// hoisted function does not for function expressions

// hoisted function

(function(){
	//var newFunction; is hoisted , does not work - my guess

	newFunciton();					// called even though not defined yet
									// returns "New Function"
									// the function declaration was hoisted to the top

	// function expression statement
	var newFunction = function(){
		alert("New Function Statement")
	}

})();

/*
http://www.sitepoint.com/back-to-basics-javascript-hoisting/
GOOD one read it!
*/

/*
http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
*/

// Declarations, Names, and Hoisting

function foo() {
	if (false) {
		var x = 1;
	}
	return;
	var y = 1;
}

// becomes

function foo() {
	var x, y;		// hoisted
	if (false) {
		x = 1;
	}
	return;
	y = 1;
}

// Named Function Expressions Hoisting

foo(); // TypeError "foo is not a function"
bar(); // valid
baz(); // TypeError "baz is not a function"
spam(); // ReferenceError "spam is not defined"

var foo = function () {}; // anonymous function expression ('foo' gets hoisted)
function bar() {}; // function declaration ('bar' and the function body get hoisted)
var baz = function spam() {}; // named function expression (only 'baz' gets hoisted)

foo(); // valid
bar(); // valid
baz(); // valid
spam(); // ReferenceError "spam is not defined"