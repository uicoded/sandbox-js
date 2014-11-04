/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
*/
try {
  throw new Error("Whoops!");
} catch (e) {
  alert(e.name + ": " + e.message);
}

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
*/
try {
   throw "myException"; // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   logMyErrors(e); // pass exception object to error handler
}