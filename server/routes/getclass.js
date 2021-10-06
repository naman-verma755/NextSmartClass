const express = require('express');

const {GetStuClass} = require('../DatabaseApis/ClassRegistration')

const router = express.Router();



router.get('/', async (req, res, next) => {
  
  
      
     res.status(201).json({
         data:"alright"
     }); 
         
   

});


router.post('/', async (req, res, next) => {

   

    try {
    
    
        let k = await GetStuClass(req.body.id)
      
        res.status(201).json({
            data:k
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