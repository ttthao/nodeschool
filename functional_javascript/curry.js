/*
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Currying
 Exercise 17 of 18

This is an example implementation of curry3, which curries up to 3 arguments:

    function curry3(fun){
      return function(one){
        return function(two){
          return function (three){
            return fun(one, two, three)
          }
        }
      }
    }

If we were to use this implementation with this sample function:

    function abc(one, two, three) {
      return one/two/three
    }

It would work like so:

    var curryC = curry3(abc)
    var curryB = curryC(6)
    var curryA = curryB(3)
    
    console.log(curryA(2)) // => 1

# Task

In this challenge, we're going to implement a 'curry' function for an arbitrary
number of arguments.

curryN will take two parameters:

  * fn: The function we want to curry.
  * n: Optional number of arguments to curry. If not supplied, `curryN` should 
  use the fn's arity as the value for `n`.

## Example

    function add3(one, two, three) {
      return one + two + three
    }
    
    var curryC = curryN(add3)
    var curryB = curryC(1)
    var curryA = curryB(2)
    console.log(curryA(3)) // => 6
    console.log(curryA(10)) // => 13
    
    console.log(curryN(add3)(1)(2)(3)) // => 6

## Conditions

  * Do not use any for/while loops or `Array.prototype.forEach`.

## Hint

  * You can detect the number of expected arguments to a function (it's arity)
  by checking a function's .length property.

## Boilerplate

    function curryN(fn, n) {
      // SOLUTION GOES HERE
    }
    
    module.exports = curryN
*/

// bind fn to curryN, but somehow count down with n
module.exports = function curryN(fn, n) {
  return curryer(fn, n)

}

// YAYAYAY
// This was really hard for me, but ya did it good job!!!
// Had to move n = n-1 to the return of decremented bind
// Had to call curreyer with n passed from curryN, then decide if
// n should be n or fn.length!
function curryer(fn, n, arg) {
  if (arg) {
    if (n <= 1) {
      return fn(arg);
    } else {
      fn = fn.bind(this, arg);
      return curryer.bind(null, fn, n-1);
    }
  } else {
    n = n || fn.length
    return curryer.bind(null, fn, n)
  }
}

// Official solution
/*
function curryN(fn, n) {
  n = n || fn.length
  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}
*/