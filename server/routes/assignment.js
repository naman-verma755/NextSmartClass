const express = require('express');


const {Assignment, GetAssignment,GetAllAssignment} = require('../DatabaseApis/Assignments')

const router = express.Router();


router.get('/', async (req, res, next) => {
  
     res.status(201).json("assignment page"); 
       
   

});


router.post('/create', async (req, res, next) => {

    let classcode = req.body.classcode;
    let k = req.body.data;

  
 
    try {
    
   
  
    let message = await Assignment(classcode, k);
    res.status(201).json(
        {
            "message":message
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

router.post('/get', async (req, res, next) => {

    try {
       
        
    
    let k = await GetAssignment(req.body.classcode,req.body.name);
   
    res.status(201).json(
        {
            "data":k
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



router.post('/getall', async (req, res, next) => {

    
    try { 
        
    
    let k = await GetAllAssignment(req.body.classcode);

    res.status(201).json(
        {
            "data":k
        });
    
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "error":"error"
        }
    );
   }

});

module.exports = router;