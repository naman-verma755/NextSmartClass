const express = require('express');


const {RegisterUser,UserLogin} = require('../DatabaseApis/UserRegistration')
const router = express.Router();



router.get('/', async (req, res, next) => {
     
     res.status(201).json("sample page"); 
       
   

});


router.post('/', async (req, res, next) => {

    try {
    
    if(req.body.type === "1")
    {
        const message = await RegisterUser(req.body.usertype, req.body.userId, req.body.first_name, req.body.last_name, req.body.gmail, req.body.password);
        res.status(201).json(
            {
                "data":message
            });
        
    }
    else {


    const userData = await UserLogin(req.body.usertype, req.body.gmail);

  
    if(userData === undefined || userData === null)
    {
        await RegisterUser(req.body.usertype, req.body.id, req.body.firstName, req.body.lastName, req.body.gmail);
    }

    res.status(201).json(
        {
            "data":req.body.id
        });
    }
   }
   catch(err)
   { 
    res.status(401).json(
        {
            "error":err
        }
    );
   }

   //to this
    
  
      
  

});
module.exports = router;