/*
FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Function Spies
 Exercise 12 of 18


# Task

Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called.

## Example

    var spy = Spy(console, 'error')
    
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    
    console.log(spy.count) // 3

## Arguments

  * target: an object containing the method `method`
  * method: a string with the name of the method on `target` to spy on.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

## Boilerplate

    function Spy(target, method) {
      // SOLUTION GOES HERE
    }
    
    module.exports = Spy


 » To print these instructions again, run: functional-javascript print
 » To execute your program in a test environment, run: functional-javascript run program.js
 » To verify your program, run: functional-javascript verify program.js
 » For help run: functional-javascript help
*/

module.exports = function Spy(target, method) {
    // if target.method called
    // count
    // How do i track that?
    // Override it!
    var spy = {
        count: 0
    }

    var orig = target[method]

    target[method] = function () {
        spy.count++
        // call() expects argument list (1,2,3), apply expects 1 argument array [1,2,3]
        return orig.apply(target, Array.prototype.slice.apply(arguments))

        // In ECMA5 we can now supply array-like object aka arguments
        // I guess target and this are the same thing?
        // return orig.apply(this, arguments) 
    }

    return spy
}