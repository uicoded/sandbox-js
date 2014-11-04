

var g = "global";

(function(){
	// var global; 			// what happened to hoisting?
    console.log(g);			//"global"
    var local = "local";
    global = "global 2";	// from here;
})();

//console.log(local); 		//error
console.log(global); 		//"global 2