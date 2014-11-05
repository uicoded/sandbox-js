/*

http://www.yuiblog.com/blog/2009/03/10/when-you-cant-count-on-your-numbers/

JavaScript has a single number type: IEEE 754 Double Precision floating point. Having a single number type is one of JavaScript’s best features. Multiple number types can be a source of complexity, confusion, and error. A single type is simplifying and stabilizing.

Unfortunately, a binary floating point type has some significant disadvantages. The worst is that it cannot accurately represent decimal fractions, which is a big problem because humanity has been doing commerce in decimals for a long, long time. There would be advantages to switching to a binary-based number system, but that is not going to happen. As a consequence, 0.1 + 0.2 === 0.3 is false, which is the source of a lot of confusion.

When working with floating point numbers, it is important to understand the limitations and program defensively. For example, the Associative Law does not hold. (((a + b) + c) + d) is not guaranteed to produce the same result as ((a + b) + (c + d)).

*/

0.1 + 0.2 === 0.30000000000000004
.1 + .2 !== .3
.1 + 1.2 === 1.3