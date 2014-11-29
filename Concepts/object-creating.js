// http://code.tutsplus.com/tutorials/javascript-objects--net-35979

// Create a Bob object using the Object() constructor.

var p1 = new Object();
p1.living = true;
p1.age = 33;
p1.gender = 'male';
p1.getGender = function () { return p1.gender; };

console.log(p1); // Logs Object {living=true, age=33, gender="male", ...}

/*
 The same p1ek object is created below, but instead of using the native Object() constructor
 to create a one-off p2, we first define our own Person() constructor that can create a p2 object
  (and any other Person object we like) and then instantiate it with "new".
*/

var Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () { return this.gender; };
};

var p2 = new Person(true, 23, 'male');

console.log(p2); // Logs Object {living=true, age=23, gender="male", ...}

/*
 The main difference between the p1 and p2 objects is not found in the object itself,
 but in the constructor functions used to produce the objects. The Bob object was produced
 using an instance of the Object() constructor. The Person() constructor produced p2,
  but can also be used as a powerful, centrally defined object "factory" to be used for
  creating more Person() objects. Crafting your own constructors for producing custom objects
  also sets up prototypal inheritance for Person() instances.
*/


// http://doppnet.com/2011/10/10-advanced-javascript-interview-questions/

(function() {
    var genericObject = {
        bar : "Hello World",
        get_bar : function() {
            return this.bar;
        }
    };
    var customObject = Object.create(genericObject);
    customObject.bar = "Aloha folks!";
    console.log(customObject.get_bar()); //outputs: "Aloha folks"
    delete customObject.bar;
    console.log(customObject.get_bar()); //fallbacks to the prototype's value, outputs: "Hello World"
})();

/*
While JavaScript has always been a prototype-oriented language, tools to work with prototypes
were somewhat missing. `Object.create` used in the code snipped above has been added in ECMAScript 5
and has not been supported prior to Firefox 4, Chrome 5, IE 9
*/
