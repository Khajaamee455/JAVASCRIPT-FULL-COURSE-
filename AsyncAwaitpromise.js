// Async await promise 
function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);         // 2 seconts time set
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // message : Hello world , after 2 seconds...
  