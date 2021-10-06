const express = require('express');

const {SaveAssignmentResponse,GetAssignmentResponse} = require('../DatabaseApis/AssignmentResponse')

const router = express.Router();


router.get('/', async (req, res, next) => {
    
     res.status(201).json("assignment  response page"); 
       
   

});


router.post('/save', async (req, res, next) => {

  
 
    try {
    
   
  
    let message = await SaveAssignmentResponse(req.body.classcode, req.body.assignmentname, req.body.name, req.body.score);
 
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
        
    
    let k = await GetAssignmentResponse(req.body.classcode,req.body.assignmentname);
   
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




module.exports = router;