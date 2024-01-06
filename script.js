/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
   const cache = {}
    return function(...args) {
        const key = JSON.stringify(args)
        //we need to the convert the arguments into a string and store them in a key

      if(!cache[key])  {
        //if that key (the arguments) are not present in the object, then we will make a key in the object using the apply method and set those args as the key
      cache[key]= fn.apply(this, args);
        
      } 
      return cache[key];

      }
 }

 
let fn = (a,b) => (a + b + c)
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    	 callCount += 1;
          return a + b;
})
const callOne = memoizedFn(2, 3) // 5
const callTwo = memoizedFn(2, 3) // 5
console.log(callCount) // 1 
console.log(callOne, callTwo)

//We want this function to take in a function and return a function but only once with given inputs, so for example the fn(1,2) can only run once. So essentially each call will have a callCount, callCount will be 0 if those fn parameters have not already been called, once they run the callCount is equal to 1, if they have been already called then it will return the previous cached value that has already been called. I believe this is called a memoize function because it turns the results of each unique call into a "memo" that can be stored and used later instead of running the entire function over again for the same call
//so we could store the results of each call into an object with the parameters and the result, then for each call the function checks the object for those parameters, if it finds them, then it will return them, if it does not find them then it will create the new key value pair and add them to the object, then return the value

//so the cache is our empty object
//now we need to make a program that stores the parameters as a key and the result as a value in the object

//but this seems to eliminate the need for a callCount?
// so this sets the initial callCount to 0, then adds 1 to the callCount before returning the value, but my question is if it does this for every call, wouldn't it reset the callCount even for repeat calls? 
//ok the callCount is only being defined for the call to show if the function is being called or if it is retrieving the results from the cache to verify that our memoize is working correctly

