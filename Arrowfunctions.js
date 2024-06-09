// Arrow funtions in javascript  (ES6)

// With 2 arguments arrow function

const sum = (param1 , param2)=>{
    return param1 + param2;
};

console.log(sum(10, 30));



// WITH SINGLE ARGUMENTS FUNCTIONS

const checkWeight = wieght =>{
    console.log(`Weight : ${wieght}`)
};

checkWeight(39);   // output is weight: 39 


// with No arguement 

const me =()=>{
    console.log('its me..');
}
me();