//Use some() as array search takes less time to parse
const array1 = [7, 3, 13, 23, 11, 17, 29, 5];
console.time('array loop');
const isPositive = (number) => 
  (array1.includes(number*2 || number/2)) ? true : false;
  console.timeEnd('array loop'); //gives estimated runtime
array1.some(isPositive); //return true or false

// O(n) = 3 with HashTable maps keys to values

const arrayMultiple = function(inputArray){
    let multiples = {}; //empty hash table
    let counter = 0;
    console.time('loop');
    while(counter < inputArray.length){
        // numbers in array to make keys for new hash table
        multiples[inputArray[counter]] = "array values!!"; //key value
        
        //checks the keys in our hash table against our current number to see if there is a key that is already double or half of our current number
        if(multiples[(inputArray[counter])*2] || multiples[(inputArray[counter])/2]){
            return true;
        }
        counter++;
    }
    console.timeEnd('loop');//gives estimated runtime
    return false;
}
arrayMultiple([7, 3, 13, 23, 11, 17, 29, 5]);

/* Big O increases exponentially with below code if the array count increases.
The runtime grows relative to the input, as the input gets arbitrarily large.

const arrayMultiple = function(inputArray){
    let counter = 0;
    while(counter < inputArray.length){
        if(inputArray.includes(inputArray[counter]*2)){
            return true;
        }
        counter++;
    }
    return false;
}
arrayMultiple([5, 6, 10]);

*/