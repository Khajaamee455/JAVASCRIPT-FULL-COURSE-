
// promises in javascript 
// they accepet 2 ags like resolve and reject ....

const promise = new promise((resolve , reject )=>{
    const resolve = true ;
    if(res){
        resolve ("resolved ...!")
    }
    else {
        reject (Error(err))
    }
});

promise.then((res)=>console.log("resolve ") , error =>console.error("error"));

