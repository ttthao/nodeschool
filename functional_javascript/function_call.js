/*
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Function Call
 Exercise 18 of 18


# Task

Write a function that allows you to use Array.prototype.slice without using 
slice.call or slice.apply to invoke it.

Normally you have to use slice with call or apply:

    var slice = Array.prototype.slice
    
    function() {
      var args = slice.call(arguments) // this works
    }

We want this to work:

    var slice = yourFunction
    
    function() {
      var args = slice(arguments) // this works
    }

## Example

A function, slice that exhibits the following behaviour:

    var nums = [1,2,3,4,5]
    
    // your slice function should match the regular
    // behaviour of slice, except it takes the array
    // as the first argument
    
    slice(nums, 0, 2) // [1, 2]
    slice(nums, 1, 2) // [2]
    
    // regular slice usage for comparison
    nums.slice(0, 2) // [1, 2]
    nums.slice(1, 2) // [2]

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not use the `function` keyword :D
## Hints

  * This is absolutely a one liner.
  * Every JavaScript Function inherits methods such as call, apply and bind 
  from the object `Function.prototype`.
  * Function#call executes the value of `this` when it is invoked. 
  Inside `someFunction.call()`, the value of `this` will be `someFunction`.
  * Function.call itself is a function thus it inherits from `Function.prototype`

    function myFunction() {
      console.log('called my function')
    }
    
    Function.prototype.call.call(myFunction) // => "called my function"

## Boilerplate

    module.exports = // your solution here!
*/

// Put 'this' in the 'environment' aka put the right context (array, function, data structure)
// into the function 
module.exports = Function.prototype.call.bind(Array.prototype.slice)

/*
"use strict";

function myFunction(passed1) {
  console.log('called my function')
  console.log(passed1)
};

// Inside myFunction.call, the value of this is myFunction itself

myFunction.call() // => called my function



// The function test below only works if the this of the function is set. 
// In order to use it you need to use call
// or apply to set the this to the object to run on

test_obj = {a:10, b:15}
function test() {
    return this.a +this.b
}
test.call(test_obj) // => 25

// These are equivalent and nothing is returned because Function.prototype isn't a function that does anything
Function.prototype.call()  // => undefined
Function.prototype.call(myFunction)  // => undefined

// Call is a function that applies the original function to an object or function passed in as the this,
// And then passes in the variables afterwards.

// What this is saying is that as stated above the first call would call Function.prototype 
// (which doesn't do anything)
// The second call is taking the first call function and then calling it.  

// The first argument to the second call function sets the the this of the first call function.
// So now the first call function is equivalent to: myFunction.call(this, arg1, arg2 etc..)
// But in order to use the first call function we still have to pass it a this, and then the arguments

// So the first argument (myFunction) is the this argument of the 2nd call function 
// that sets the "this environment" of the 1st call function
// The second argument (this), is passed to the 1st call function as it's first argument (the thisArg of the 1st call)
// The 3rd argument is passed as the 2nd argument to the 1st call function which is the first argument that gets
// passed to the function

Function.prototype.call.call(myFunction, this, "BERNIE") 
 // => called my function
// => BERNIE

// Similar to the above but using bind instead.  
// bind also takes the same arguments as call (thisArg, arg1, arg2 etc), 
// but returns a partial function instead of executing it

// The this arg of bind sets the "this Environment" of call, 
// What is returned is a partial implementation of call that is still expecting 
// it's normal arguments: (thisArg, arg1, arg2, ...)
// But its "this environment" is now set to myFunction

testfunc = Function.prototype.call.bind(myFunction)
testfunc(this, "BERNIE")
// => called my function
// => BERNIE

// Could also be written like this

testfunc = Function.prototype.call.bind(myFunction, this)
testfunc("BERNIE")
// => called my function
// => BERNIE


// So this is the same as the above but using the slice method on Array.prototype
// So the call method is now a partial method that is still expecting (thisArg, arg1, arg2..)
// But it's this environment has been set to the Array.prototype.slice method
// So you can therefore pass it any array.

slice = Function.prototype.call.bind(Array.prototype.slice)
slice([1,2,3,4],1,3) // => [2,3]

// The same as below where call sets the thisenvironment of the slice function to the array [1,2,3,4]


Array.prototype.slice.call([1,2,3,4],1,3 )
// => [ 2, 3 ]

// This doesn't work because slice is not bound to any actuall array
Array.prototype.slice([1,2,3,4,5], 1,3)
// => []
*/