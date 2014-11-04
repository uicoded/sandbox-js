

 function Apple () {
 	// body...
 }
 var apple1 = new Apple();
 Apple.prototype.seeds = true;

 function Banana () {
 	// body...
 }

 var banana1.prototype = Apple.prototype;
console.log(banana1.seeds);