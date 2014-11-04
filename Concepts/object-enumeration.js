// 
// https://javascriptweblog.wordpress.com/2011/02/28/javascript-object-keys-finally/
/*
In JavaScript, enumeration across regular (non-Array) Objects is more difficult (e.g. for-in loop, without which we can’t  learn the names and length of its own property set) compared to an Array (forEach, map, filter etc.); Enter ECMAScript 5
*/

/* New Methods
	Object.keys(obj)							// Returns Array of keys

		http://ecma262-5.com/ELS5_HTML.htm#Section_15.2.3.14
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

	Object.getOwnPropertyNames(obj)				// Returns Array of keys including those non enumeratable

		http://ecma262-5.com/ELS5_HTML.htm#Section_15.2.3.4
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
*/

// Chrome, Safari, FF4, IE9
var purchases = {milk: 3.99, butter: 2.99, bread: 4.99 };
// Object.keys(purchases); 				 	// ['milk', 'butter', 'bread']
// Object.getOwnPropertyNames(purchases)	// ['milk', 'butter', 'bread']
// ... add more examples ...

// For Loop
var keys = Object.keys(purchases), totalCost = 0;
for (var i = keys.length; i--;) {
    totalCost += purchases[keys[i]];
}
totalCost; 									// 11.97

// While Loop
var keys = Object.keys(purchases), i = keys.length, totalCost = 0;
while  (i--) {
    totalCost += purchases[keys[i]];
}
totalCost; 									// 11.97


/*
@jdalton Object.keys() shim

if (typeof Object.keys != 'function') {
    Object.keys = function(obj) {
       if (typeof obj != "object" && typeof obj != "function" || obj == null) {
            throw TypeError("Object.keys called on non-object");
       } 
       var keys = [];
       for (var p in obj) obj.hasOwnProperty(p) &&keys.push(p);
       return keys;
    }
}
Object.keys({a:1, b:2, c:3}); //['a', 'b', 'c']
*/

// New Method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
Object.getOwnPropertyNames(String.prototype);
/* returns
["length", "constructor", "concat", "localeCompare", "substring", "italics", "charCodeAt", "strike", "indexOf", "toLowerCase", "trimRight", "toString", "toLocaleLowerCase", "replace", "toUpperCase", "fontsize", "trim", "split", "substr", "sub", "charAt", "blink", "lastIndexOf", "sup", "fontcolor", "valueOf", "link", "bold", "anchor", "trimLeft", "small", "search", "fixed", "big", "match", "toLocaleUpperCase", "slice"]
*/
Object.getOwnPropertyNames(Math).forEach(function(e) {
    if((typeof Math[e] == 'function') && (Math[e].length == 1)) {
        console.log("Math." + e + "(10) -> " + Math[e](10));
    } 
});
/* returns
//Math.cos(10) -> -0.8390715290764524
//Math.log(10) -> 2.302585092994046
//Math.tan(10) -> 0.6483608274590867
//Math.sqrt(10) -> 3.1622776601683795
//etc...
*/


// Restring enumeration

// Warranted you need more, use ES5 Object.defineProperties and maybe add getter and setter for age.
function Dog(name, age) {

	Object.defineProperties(this, {
	    name: {
	        value: name,
	        enumerable: true
	    },
	    age: {
	        set: function (value) {
	            value = parseInt(value, 10);
	            if (isNaN(value)) throw new Error("Value set on age is not a number");
	            age = value;
	        },
	        get: function () {
	            return age;
	        },
	        enumerable: true
	    },
	    secretSignal: {
	    	value: "--.--..",
	    	enumerable: false
	    }
	});
}

var alik = new Dog('Alik', 3);
Object.getOwnPropertyNames(alik);	//["name", "age", "secretSignal"] // shows all methods
Object.keys(alik);					//["name", "age"]

// Adding method and excluding it from enumeration (saving extra step checking wheather the property is function)
Object.defineProperties(Dog.prototype, {
    bark: {
        value: function () {
            console.log("HAF!");
        }
    } 
});