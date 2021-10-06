const {client} = require('./DatabaseClient');


async function Assignment(classcode, k ) {

   
try {
       const db = client.db("Assignments");
       var col;
       
       col = db.collection(classcode);
       
       var c =  await col.findOne({name:k.name});
     
    
    
           if(c !== null && c!== undefined)
           return "assignment name already taken";

        
    
          
         let t=  await col.insertOne(k);
      
   return "assignment created successfully";


 
      
       
   
   }
   catch(err){
       return err;
   }
   



}




async function GetAssignment(classcode,name ) {


   
try {

   const db = client.db("Assignments");
   var col;
   
   col = db.collection(classcode);
   
   var c =  await col.findOne({name:name});
 


    return c;
   }
   catch(err){
    
       return "error";
       
      
   }
   



}


async function GetAllAssignment(classcode) {


   
try {

   const db = client.db("Assignments");
   var col;
   
   col = db.collection(classcode);
   
   var myDoc =  await col.find();
   let arr = new Array();
        await myDoc.forEach((item)=> {
           arr.push(item.name)
          })
        return arr;
 
   }
   catch(err){
    
       return "error";
       
      
   }
   



}

module.exports = {Assignment,GetAssignment,GetAllAssignment};
