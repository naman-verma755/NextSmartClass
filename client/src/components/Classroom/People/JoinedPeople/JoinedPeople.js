
import React, { useEffect, useState } from 'react';



const JoinedPeople= ({classcode,usertype, name}) => {

    const [arr, setArr] = useState([]);
    const [teacher, setTeacher] = useState([]);
     async function sub() {

     

          
    let Options = {
        method: 'POST',
                mode:'cors',
                cache: 'no-cache',
                
                headers: {
                             "content-type":"application/json",
                       },
                
                 redirect: 'follow',
                 referrerPolicy:'no-referrer',
                body: JSON.stringify({
                   
                   "classcode": classcode, 
               
                   
    
                  })
      
    }
    
    const response = await fetch(`https://nextsmartclass.herokuapp.com/getpeople`,Options)
    
    const data = await response.json();
    setArr(data.data);
    setTeacher(data.teacher);

}
 
useEffect (() => {
      
    sub();
},[])
 





  return (
   
        <div className = "people-main-first back-glass">
        <div className = "people-main-first-p1">
        <h2>Teacher</h2>
        <hr></hr>
        <div className = "people-div1">
        <ul>
        <li>{teacher}</li>
        
        </ul>
        </div>
        </div>
        {
            (usertype === "teacher")
            ?
            <div className = "people-main-first-p2">
            <h2>Student</h2>
            <hr></hr>
            <div className = "people-div2">
            <ul>
              
            {
            arr.map( (item,index) => {
                     return( 
                         <li key = {index}>{item.name}</li>
                        )
                    })
                }
            </ul>
            </div>
            </div>
            :
            <div></div>
        }
        
       
        </div>
        
   
   
  )




}

export default JoinedPeople;



