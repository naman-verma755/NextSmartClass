

const {client} = require('./DatabaseClient');



async function Messages(classcode, username, message) {
   
try {
       var db = client.db("Messages");
       var col = db.collection(classcode+"Messages");
      
    

    
           

           let personDocument = {
               "username":username,
               "message":message
   
   
           }
           
      
    
          
        let res =  await col.insertOne(personDocument);
   
      return "messagesend";
       
   }
   catch(err){
      
       return "error";
   }
   



}







async function fetchMessages(classcode) {
 
 try {
        var db = client.db("Messages");
        var col = db.collection(classcode+"Messages");
     
         let res = col.find({});
        
       return res
  
    }
    catch(err){
        
        return err;
    }
    
 
 
 
 }
 


module.exports = {Messages,fetchMessages};




