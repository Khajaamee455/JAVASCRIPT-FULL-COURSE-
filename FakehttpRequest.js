// Fake http request with promise 


const mock = (success, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve({status: 200, data:{}});
        } else {
          reject({message: 'Error'});
        }
      }, timeout);
    });
  }
  const someEvent = async () => {
    try {
      await mock(true, 1000);
    } catch (e) {
      console.log(e.message);
    }
  }
  