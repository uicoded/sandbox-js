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