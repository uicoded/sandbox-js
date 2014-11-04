/*
   Module Pattern

   http://yuiblog.com/blog/2007/06/12/module-pattern/

*/

var moduleX = function(){
	//"private" variables:
	var privateVar = "Private variable.";
	
	//"private" method:
	var privateMethod = function(){
		console.log("Private method.");
	}

	return  {
		publicProperty: "I'm accessible as moduleX.publicProperty.",
		publicMethod: function(){
			console.log("I'm accessible as moduleX.publicMethod.");
			// Here you can access "private" vars and methods:
			console.log(privateVar);
			console.log(privateMethod());
			// and properties within same scope of course
			console.log(this.publicProperty);
		}
	};
}();