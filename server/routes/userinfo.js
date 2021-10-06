const express = require('express');



const {GetUserInfo} = require('../DatabaseApis/UserRegistration')

const router = express.Router();



router.get('/', async (req, res, next) => {
      
     res.status(201).json("user info page"); 
       
   

});


router.post('/', async (req, res, next) => {


  

    try {

      let userinfo = await GetUserInfo(req.body.usertype, req.body.id);
    
    res.status(201).json( 
        {
            "firstName":userinfo.firstname,
            "lastName":userinfo.lastname
            
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

   //to this
    
  
      
  

});
module.exports = router;