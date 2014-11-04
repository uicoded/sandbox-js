/* AMD - Asynchronous Module Definition

define(id?, dependencies?, factory);

*/

define('account', ['service','pubsub'], function(){
	//do something
	//...
	//export public APIs
	return {
		login: function(){},
		logout: function(){}
	};
});

// Another Variant
(function(){
	// bunch of code
	//...
	exports = {
		login: function(){},
		logout: function(){}
	};

	define('account', function(){
		return exports;
	})
}());

//define jQuery
if(typeof define === "function" && define.amd && define.amd.jQuery){
	define("jquery", [], function(){ return jQuery; });
}