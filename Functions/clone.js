/*
  Object.clone();

  http://jsperf.com/cloning-an-object/2
  http://www.mikitamanko.com/blog/2013/05/12/how-to-clone-an-object-in-javascript/
  http://davidwalsh.name/javascript-clone
*/

var oldObject = {
   a: 1,
   b: 2,
   c: 3,
   d: 4,
   e: 5,
   f: function() {
    return 6;
   },
   g: [7, 8, 9]
};

// jQuery deep copy:
var newObject = jQuery.extend(true, {}, oldObject); // 76% slower
// JSON
var newObject = JSON.parse(JSON.stringify(oldObject)); // 12% slower
// jQuery copy (not deep)
var newObject = jQuery.extend({}, oldObject); // 24% slower
// simple clone function
var newObject = clone(oldObject); // fastest way, first function, that will copy only references (seems to be completely wrong way)
// ES5 Object.clone
var newObject = Object.clone(oldObject); // 85% slower