// Export modules in javascript .....

// Default export
export default function add(x , y){
    return x + y 
}
// Normal export
export function substrction (x , y){
    return x - y 
}


// u can export more that one function like this in javscript
function multiply(x,y){
    return x * y
}
function duplicate(x){        // simple fucntions ...
    return x * 2
}
export {
    multiply,
    duplicate            // like this ....
}



// IMPORT MODULES IN JAVASCRRIPT..

// lets import that exported modules 

import add, { subtract, multiply, duplicate } from 'modules.js';

console.log(add(6, 2)); // 8 
console.log(subtract(6, 2)) // 4
console.log(multiply(6, 2)); // 12
console.log(duplicate(5)) // 10


// u can also import using reqire  , 
const module = require ('./Modules.js')

//like this You can alson import the exported modules ....

