// Getters and Setters
// https://javascriptweblog.wordpress.com/2011/02/28/javascript-object-keys-finally/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters

/* Accessor properties don't contain a value but instead define a function to call when the property
is read or written to*/

var p1 = {
	_name: "Karel",
	_counter: 0,

	get name(){
		console.log('Name accessed '+ ++this._counter + 'x');
		return this._name;
	},
	set name(val){
		console.log('Setting the internal name to %s', val);
		this._name = val;
	}
};

p1.name; 		// Karel
p1.name = 'Pepa';	// Setting the internal name to Pepa Pepa


/* If you define getter only, then the property becomes read only */

// 'use strict';  // if you use strict it will throw a type error!
var p1 = {
	_name: "Karel",
	_counter: 0,

	get name(){
		console.log('Name accessed '+ ++this._counter + 'x');
		return this._name;
	}
};

p1.name; 			// Karel
p1.name = 'Pepa';	// Karel and type error in strict mode!


/* If you define setter only, then the property becomes write only */

// 'use strict';  // strict or no strict will not have effect on failed read
var p1 = {
	_name: "Karel",
	_counter: 0,

	set name(val){
		console.log('Setting the internal name to %s', val);
		this._name = val;
	}
};

p1.name; 			// undefined - fails silently regadless of mode
p1.name = 'Pepa';	// Setting the internal name to Pepa Pepa
