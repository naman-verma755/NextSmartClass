const express = require('express');



const {GetPeople, GetTeacher} = require('../DatabaseApis/ClassRegistration')

const router = express.Router();

router.get('/', async (req, res, next) => {

     res.status(201).json({
         data:"get people"
     }); 
         
   

});


router.post('/', async (req, res, next) => {



    try {
    
    
        let arr = await GetPeople(req.body.classcode);
        let userid = req.body.classcode.split("-");
        let teacher = await GetTeacher(userid[0]);
        
           
          res.status(201).json({
              "data":arr,
              "teacher":teacher
          }); 
 
   
     
    
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "error":err
        }
    );
   }

});


  

module.exports = router;