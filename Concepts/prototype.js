/*
* All functions (with exception of couple build-in functions) have prototype property
* that is used during the creation of new instances.
* The prototype is shared among all object instances (thus saving memory*) and they can
* access the properties of the prototype.
*
*/

//hasOwnProperty() is defined on generic Object prototype. But every object can access it.

Object.keys(Object);
