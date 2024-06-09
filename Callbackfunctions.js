// Callback functions in js
// callback fucntions are the functions they invoke when event is fired ..

const isEven =(n)=>{              // this is callback function just checking the number is even or not ..
    return n % 2 == 0 ;
}

let printmgs = (evenFunction , number )=>{

    const isnumberEven = evenFunction(number);
    console.log(` ${number} is an even number : ${isnumberEven}`)
}

printmgs(isEven , 10)         // here calling the function and callback funtion is invoked for checking the number 
                              // if its even or not ..