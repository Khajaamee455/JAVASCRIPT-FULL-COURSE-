// Objects in javascript ..

const games = {
    Name :"PUBG MOBILE",
    AGE : "FIVE YEARS",                      // this is how we create object in js
    GUNS : {M416 :5.5 , AKM : 7.62}
}


delete games.AGE                        // this is how we can delete the objects using delete 

console.log(games);                // checking age is deleted or not from the object 
console.log(games.Name);              // accessing their values 
console.log(games.GUNS.M416);      