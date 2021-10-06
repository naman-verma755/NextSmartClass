



async function FetchRoomMessages(classcode, setMessages) { 

    const Options = {
      method: 'POST',
              mode:'cors',
              cache: 'no-cache',
              
              headers: {
                           "content-type":"application/json",
                     },
              
               redirect: 'follow',
               referrerPolicy:'no-referrer',
              body: JSON.stringify({
                  "classcode":classcode
                })
    
  }
  
      
 
  
   
          const response = await  fetch('https://nextsmartclass.herokuapp.com/messages/mes',Options)
         const data = await response.json();
         let arr = [];
         data.arr.forEach(element => {
            arr.push(element);
            
        });
         setMessages(arr);
       
          
  
  
  }
      
  
      export default FetchRoomMessages;
      