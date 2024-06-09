// this keyword in js 

const cat ={
    name : "kaashu",
    age : 2 ,

    whatname(){                   // using this keyword , this keyword refers to the current object 
        return this.name
    }

};
console.log(cat.whatname());           // kaashu