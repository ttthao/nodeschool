/*
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Blocking Event Loop
 Exercise 13 of 18


# Task

Modify the recursive repeat function provided in the boilerplate, such that it
does not block the event loop (i.e. Timers and IO handlers can fire). This
necessarily requires repeat to be asynchronous.

A timeout is queued to fire after 100 milliseconds, which will print the results
of the test and exit the process. repeat should release control of the event
loop to allow the timeout to interrupt before all of the operations complete.

Try to perform as many operations as you can before the timeout fires!

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hints

  * If your program takes a long time to run,
  something is probably wrong.Use Control - C to kill the node process.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

## Boilerplate

    function repeat(operation, num) {
      // modify this so it can be interrupted
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    
    module.exports = repeat


 » To print these instructions again, run: functional-javascript print
 » To execute your program in a test environment, run: functional-javascript run program.js
 » To verify your program, run: functional-javascript verify program.js
 » For help run: functional-javascript help
*/

module.exports = function repeat(operation, num) {
    console.log(num)
    if (num <= 0) return
    operation()

    if (num % 10 === 0) {
        console.log("pre-timeout")
        // Will delay the execution of callback, but lets other code after to work since it's assync
        // setTimeout will be placed on the queue and ran at the next opportunity, not immediately
        // This lag lets other events/messages in the event loop to execute, and pause the
        // execuation of the repeat()
        setTimeout(function () {
            // modify this so it can be interrupted
            console.log("async")
            console.log(num)
            return repeat(operation, --num)
        })
        console.log("post-timeout")
    } else {
            console.log("sync")
            console.log(num)
        return repeat(operation, --num)
    }

//     if (num <= 0) return
//     operation()
//     console.log(num)
//     return repeat(operation, --num)
}