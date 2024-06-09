// Async await syntax ....

const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try{
  const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok){
        const jsonResponse = await response.json()
      }
    }
    catch(error){
      console.log(error)
    }
  }
  