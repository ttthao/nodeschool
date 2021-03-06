/*
Implement a recursive function that returns all of the unique dependencies,
FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
Recursion
Exercise 16 of 18


# Task

Implement a recursive function that returns all of the unique dependencies, 
and sub-dependencies of a module, sorted alphabetically. 
Dependencies should be printed as dependency@version e.g. 'inflection@1.2.6'.

Multiple versions of the same module are allowed, but duplicates modules of the 
same version should be removed.

## Arguments:

 * tree: A dependency tree. See below for an example of the structure.

## Example

   var loremIpsum = {
     "name": "lorem-ipsum",
     "version": "0.1.1",
     "dependencies": {
       "optimist": {
         "version": "0.3.7",
         "dependencies": {
           "wordwrap": {
             "version": "0.0.2"
           }
         }
       },
       "inflection": {
         "version": "1.2.6"
       }
     }
   }
   
   getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

## Conditions:

 * Do not use any for/while loops.

## Boilerplate

   
   function getDependencies(tree) {
     // SOLUTION GOES HERE
     // Note: Feel free to add additional arguments
     // to this function for use with recursive calls.
     // Or not! There are many ways to recurse.
   }
   
   module.exports = getDependencies

## Resources

 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
module.exports = function getDependencies(tree) {
    // Start at root, check for 'dependencies' key
    // if dependencies, recurse into that key
    // console.log(tree+'\n')

    // console.log(tree)
    if (!(tree)) {
        return;
    }
    else if (tree.hasOwnProperty('dependencies')) {
        var dependencies = getDependencies(tree['dependencies']);
        dependencies = dependencies.filter(function (element, index, array) {
            return array.indexOf(element) === index;
        });
        return dependencies;
    } else {
        // if no 'dependency' key, get all the keys in this list of dependencies
        var dependencies = Object.keys(tree);

        // for each dependency, check if there is a 'dependencies' key
        var list = dependencies.reduce(function (list, dependency) {
            if (tree[dependency].hasOwnProperty('dependencies')) {
                var partial = getDependencies(tree[dependency]['dependencies']);
                var depString =  dependency + '@' + tree[dependency]['version'];
                list.push(depString);
                list = list.concat(partial);
                return list;
            } else if (tree[dependency]['version']){
                var depString =  dependency + '@' + tree[dependency]['version'];
                list.push(depString);
                return list
            }
        }, []);

        if (list) {
            return list.sort();
        } else {
            return []
        }
    }
}

/*
module.exports = function getDependencies(module, result) {
      result = result || []
      var dependencies = mod && mod.dependencies || []
      Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + mod.dependencies[dep].version
        if (result.indexOf(key) === -1) result.push(key)
        getDependencies(mod.dependencies[dep], result)
      })
      return result.sort()
    }

*/