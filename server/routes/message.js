const express = require('express');
const router = express.Router();
const {fetchMessages} = require('../DatabaseApis/Messages');

router.post('/', async (req, res, next) => {
    
 

    try {

        
   
    res.status(200).json(c);
    
        
    } catch (error) {
       
        res.status(400).json({message: error});
        
    }


    

   
});





router.post('/mes', async (req, res, next) => {

   

    try {

   
      
          
        var messages= await fetchMessages(req.body.classcode);
        let arr = new Array();
        await messages.forEach((item)=> {
           arr.push({"username":item.username, "message":item.message});
          })
         
    res.status(200).json({
        arr
    });
    

        
    } catch (error) {

        res.status(400).json({message: error});
        
    }


    

   
});

module.exports = router;