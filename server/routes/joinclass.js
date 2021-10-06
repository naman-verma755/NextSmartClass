const express = require('express');


const {JoinClass} = require('../DatabaseApis/ClassRegistration')

const router = express.Router();



router.get('/', async (req, res, next) => {
  
      
     res.status(201).json("joinclass page"); 
       
   

});


router.post('/', async (req, res, next) => {
 
    try {
    
    
           let k =  await JoinClass(req.body.id, req.body.classcode,req.body.name);

  
    res.status(201).json(
        {
            "data":k
        });
    
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "error":"Error!!!"
        }
    );
   }

});


   

module.exports = router;