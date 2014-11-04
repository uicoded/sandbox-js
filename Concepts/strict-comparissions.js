"true" == true  //false  not really: http://stackoverflow.com/questions/11363659/why-does-true-true-show-false-in-javascript
/*
If the two operands are not of the same type, JavaScript converts the operands
then applies strict comparison. If either operand is a number or a boolean,
the operands are converted to numbers if possible; else if either operand is
a string, the other operand is converted to a string if possible.

"true" is converted to NaN, while true is converted to 1. (Number("true") == NaN), (Number(true) == 1)
*/

"true" === true	//false
"0" == false	//true
"0" == 0		//true
0 === false		//false
"" == false		//true

/*
//CoffeScript
"true" is true  //false
"true" is "true"	//true
"0" is false	//false
"0" is 0		//false
0 is 0			//true
"" is false		//false
*/