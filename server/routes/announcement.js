const express = require('express');



const {Announcement} = require('../DatabaseApis/Chat');

const router = express.Router();

router.get('/', async (req, res, next) => {
   
      
     res.status(201).json("announcement page");   
       
   

});


router.post('/', async (req, res, next) => {

    
  

    try {
    
   
  
    let k = await Announcement("get", req.body.classcode, "");
    res.status(201).json(
        {
            "data":k
        });
    
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "data":"error"
        }
    );
   }

  
  
      
  

});

module.exports = router;