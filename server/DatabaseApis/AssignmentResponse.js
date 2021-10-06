
const {client} = require('./DatabaseClient');


async function SaveAssignmentResponse(classcode, assignmentname, name, score ) {

try {
       const db = client.db("Responses");
       var col;
       
       col = db.collection(classcode);
       
     
         
           let responseDocument = {
              "assignmentname":assignmentname,
              "name":name,
              "score":score

           }

        
    
          
           await col.insertOne(responseDocument);
      
   return "responses save successfully";


   }
   catch(err){
       return "error"
   }
   



}


async function GetAssignmentResponse(classcode, assignmentname) {

   
try {
       const db = client.db("Responses");
       var col;
       
       col = db.collection(classcode);
       
       var myDoc =  await col.find({assignmentname:assignmentname});
     
    
    
       let arr = new Array();
       await myDoc.forEach((item)=> {
          arr.push({"name":item.name,"score":item.score});
         })
       return arr;

          

        
    
          
       
 


 
      
       
    
   }
   catch(err){
       return "error"
   }
   



}



module.exports = {SaveAssignmentResponse,GetAssignmentResponse};
