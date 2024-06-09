// Loops in javascript 
// loops is nothing but whenever we want to repeate a certen statment severel time then we should write 
// those statements inside the loop body ..


// While loop in javascript
while(condition){
    // code block to be exicuted
}

let i = 0 ;
while (i==5) {
    console.log('khaja ameen');
    i++;
    
}


// Reverse loop in javscript 

const fruits = ["apple" , "banana", "mango", "orange"];

for(let i = fruits.length-1; i>=0 ; i--){

    console.log(Array[i]);

}

// output : orange , mango , banana, apple


// DO-WHILE LOOP IN JAVASCRIPT

x = 0 ;
i = 0 ;

do{
    x = x + i ;
    console.log(x)
    i++;
}while(i < 5);

//out : 0, 1, 3,6,10


// FOR LOOP IN JAVASCRIPT

for (let i = 0 ; i < 10 ; i++){
    console.log(i);
};

// 0 , 1,2,3,4,5,6,7,8,9



// LOOPING THROUGH ARRAYS IN JAVASCRITP

for( i = 0 ; i< Array.length ; i++){
    console.log(Array[i]);
}

// every item in array 

// Break statment in js

for (let i = 0 ; i< 5 ; i++){
    if(i==3){
        break;           // terminate the loop 
    }
    console.log(i)
}

// out : 0 , 1,2 

// Continue statment in js

for ( let i =0 ; i<5 ; i++){
    if(i ==2){
        continue;      // it will skip the 2 and continue the loop 
    }
    console.log(i);
}
//out : 0 , 1, 3, 4

// FOR IN LOOP IN JS  = ITS like for each loop in java 

const food = ["rice" , "sambar", "salt"];

for (let index in food){
    console.log(index);
}
//out : 0 , 1, 2 

const bikes = ["ninja", "spender", "pulser", "tvs"];

for ( let gadi of bikes){
    console.log(gadi);
}

// its a for each loop in java 
// we use this in java for featching the array elemetns 

