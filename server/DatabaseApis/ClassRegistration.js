

const {client} = require('./DatabaseClient');




async function CreateClass(usertype, userid, newclass, section,subject ) {


   
try {

       const db = client.db("Classes");
       var col;
       
       col = db.collection("Registered classes");
       let classcode = userid+"-"+subject.replace(" ","-");

       const myDoc = await col.findOne({usertype:usertype, id:userid, classcode:classcode, class:newclass, section:section,subject:subject});

        if(myDoc !== null)
        {
        return "already registered";
}

       let personDocument = {
        "usertype":usertype,
        "id":userid,
        "classcode":classcode,
        "class":newclass,
        "section":section,
        "subject":subject
        


    }
   
    const p = await col.insertOne(personDocument);
  
      

      
       return "created successfully";
   }
   catch(err){
       return "error";
      
   }
   



}


async function GetClasses(usertype,userid) {


    
 try {
        const db = client.db("Classes");
       var col;
       
       col = db.collection("Registered classes");
  
        const myDoc = col.find({usertype:usertype,id:userid});
     let arr = new Array();
        await myDoc.forEach((item)=> {
           arr.push(item)
          })
        return arr;
    }
    catch(err){
        return err;
       
    }
    
 
  
 
 }

 async function JoinClass(userid, classcode,name) {

    try {
            var db = client.db("Classes");
           var col;
           
           col = db.collection("Registered classes");
      
            var myDoc = await col.findOne({classcode});
            if(myDoc === null || myDoc === undefined)
            return "Not find";


            db = client.db("People");
           
            col = db.collection(classcode+"-people");
            let doc = {
                "userid":userid,
                "name":name
                
            }
            await col.insertOne(doc)


             db = client.db("StudentClasses");
           
            col = db.collection(userid);
     
            let personDocument = {
             "usertype":myDoc.usertype,
             "id":myDoc.id,
             "classcode":myDoc.classcode,
             "class":myDoc.class,
             "section":myDoc.section,
             "subject":myDoc.subject
             
      
     
         } 
        
         const p = await col.insertOne(personDocument);
         return "joined successfully"
         
            
        }
        catch(err){
            return err;
           
        }
     
 } 

 async function GetStuClass(userid) {

    try {
        const db = client.db("StudentClasses");
       var col;
       
       col = db.collection(userid);
  
        const myDoc =  col.find({});
     let arr = new Array();
        await myDoc.forEach((item)=> {
           
           arr.push(item)
          })
        return arr;
         
            
        }
        catch(err){
            return err;
           
        }
     
 } 


 async function GetPeople(classcode) {

    try {
       var db = client.db("People");
           
       
        var col = db.collection(classcode+"-people");
        
        let arr = [];
        let myDoc = col.find({});
     
        await myDoc.forEach((item)=> {
           arr.push({"name":item.name, "userid":item.userid})
          })
        return arr;
      
      
      
            
        }
        catch(err){
            return err;
           
        }
     
 } 

 
 async function GetTeacher(userid) {

        try {
           var db = client.db("Users");
               
           
            var col = db.collection("Teachers");
            
          
            let myDoc =await col.findOne({userid:userid});

            return (myDoc.firstname + " " + myDoc.lastname);
         
            
          
          
                
            }
            catch(err){
                return "error";
               
            }
         
     } 

module.exports = { CreateClass,GetClasses,JoinClass,GetStuClass, GetPeople, GetTeacher};
