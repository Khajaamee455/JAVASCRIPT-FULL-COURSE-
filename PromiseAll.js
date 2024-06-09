// promise all in javascript 

// promise all is nothing but binding one or more promises ...like this

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
  
  Promise.all([promise1, promise2]).then((res) => {
    console.log(res[0]);      // res[0] -> means promise 1 
    console.log(res[1]);       // res[1]-> means promise 2 
  });
  