const express = require('express');



const {CreateClass,GetClasses} = require('../DatabaseApis/ClassRegistration');
const router = express.Router();




router.get('/', async (req, res, next) => {
      
     res.status(201).json("createclass page"); 
       
   

});


router.post('/create', async (req, res, next) => {

 

    try {
    
   
  
    let data = await CreateClass(req.body.usertype,req.body.id,req.body.class, req.body.section, req.body.subject);
    res.status(201).json(
        {
            "data":data
        });
    
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "data": "Error!!!"
        }
    );
   }


});

router.post('/get', async (req, res, next) => {

    try {
        
    
    let k = await GetClasses(req.body.usertype,req.body.id);
    res.status(201).json(
        {
            "data":k
        });
    
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "data":"Error!!!"
        }
    );
   }

});
module.exports = router;