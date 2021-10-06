const {client} = require('./DatabaseClient');



async function Announcement(method, classcode, message ) {

   
try {

       
       const db = client.db("AnnouncementsDatabase");
       var col;
       
       col = db.collection(classcode);
       
   
    
         if(method === "post")
         {
         
           let responseDocument = {
              "message":message

           }

           await col.insertOne(responseDocument);
           return "responses save successfully";
        }
        else if(method === "get")
        {
            let myDoc =  await col.find();
            let arr = new Array();
       await myDoc.forEach((item)=> {
          arr.push(item.message);
         })
       return arr;
        }
      
   


 
      

   }
   catch(err){
       return "error"
   }
   



}


// async function Get(classcode, assignmentname) {

//    // console.log("success=",firstName,lastName,userid)
//    // console.log(classcode, assignmentname, name, score);
   
// try {
//        await client.connect();
//        const db = client.db("Responses");
//        var col;
       
//        col = db.collection(classcode);
       
//        var myDoc =  await col.find({assignmentname:assignmentname});
     
    
    
//        let arr = new Array();
//        await myDoc.forEach((item)=> {
//            console.log(item.name);
//           arr.push({"name":item.name,"score":item.score});
//          })
//        return arr;

          

        
    
          
       
 


 
      
       
       
//        // const myDoc = await col.findOne();
//        // console.log(myDoc);
//    }
//    catch(err){
//        console.log("not found",err); 
//        return "error"
//    }
   



// }



module.exports = {Announcement};
