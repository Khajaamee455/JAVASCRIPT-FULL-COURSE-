// Basic fetch api funtion ....

fetch('https://api-xxx.com/endpoint', {
  method: 'POST',                            // it post method
 body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})
