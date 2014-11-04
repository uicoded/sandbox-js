/* Instance properties */

// Construction Function
function Person(name){
	this.name = name;
};

// Create instance object and store to local variable
var bob = new Person("Bob");
var alice = new Person("Alice");

// Bob gets formal name
bob.name = "Robert";

// Alice keeps her name, no surprise. There are two separate instances of Person

/* Prototype property, link to constructor Object */
Person.prototype = {
	lastName : "Howard"
};

// If defined after bob and alice instances they will not inherit it.
// bob.lastName == undefined
// Try again

// Create instance object and store to local variable
var bob = new Person("Bob");
var alice = new Person("Alice");

bob.lastName === "Howard"	//true
alice.lastName === "Howard" //true

/*
http://en.wikipedia.org/wiki/Prototype-based_programming

Prototype-based programming is a style of object-oriented programming in which
behaviour reuse (known as inheritance) is performed via a process of cloning existing objects
that serve as prototypes.
*/


/*
http://helephant.com/2009/01/18/javascript-object-prototype/

In a prototype based systems there are no classes. All objects are created by
adding properties and methods to an empty object or by cloning an existing one.
Although a constructor function may look like a class (probably so people from
more traditional class based languages would be able to use it), it’s really just
a function that knows how to add the right properties and methods to create a particular type of object.

This approach is called prototype-based inheritance because an existing object
is used as a template (or a prototype – a typical example) to build other objects. 
The existing object will be used as a starting point to build the new object but 
the new object does not have to be exactly the same.
*/



function Pet(name, species, hello){
    this.name = name;
    this.species = species;
    this.hello = hello;
}
 
Pet.prototype.sayHello = function(){
    alert(this.hello);
}
 
var rufus = new Pet("Rufus", "cat", "Miaow!");
rufus.sayHello();



/*
http://helephant.com/2009/08/17/javascript-prototype-chaining/

Prototype chaining

is used to build new types of objects based on existing ones. It has a very similar
job to inheritance in a class based language.
*/

function Pet(name, species, hello){
	this.name = name;
	this.species = species;
	this.hello = hello;
}

Pet.prototype = {
	sayHello : function()
	{
		alert(this.hello);
	}
}


/**/
function Cat(name, hello, breed, whiskerLength){
	Pet.call(this, name, "cat", hello);
	this.breed = breed;
	this.whiskerLength = whiskerLength;
}
/* OR * /
function Cat(name, hello, breed, whiskerLength){
    this.name = name;
    this.species = "cat";	// notice the cat
    this.hello = hello;
    this.breed = breed;
    this.whiskerLength = whiskerLength;
}
/**/

Cat.prototype = new Pet();				// Is there a diference with: Cat.prototype = Pet.prototype;

Cat.prototype.catNap = function(){
	alert(this.name + ": zzzzz...");
}
Cat.prototype.sayHello = function(){
	alert(this.hello + " from a cat..");
}
	
var rufus = new Cat("rufus", "miaow", "Maine Coon", 7);
rufus.sayHello();
rufus.catNap();