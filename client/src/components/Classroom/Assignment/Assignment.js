
import React, { useState,useEffect } from 'react';

import {Link} from 'react-router-dom';

const Assignment= ({classname, subject, section, classcode, name, usertype}) => {
 
   const [arr, setArr] = useState([]);
 
    useEffect(() => {

     

          
     
        
        async function func() {
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
            const response = await fetch(`https://nextsmartclass.herokuapp.com/assignment/getall`,Options)
        
        const data = await response.json();
        setArr(data.data)

        }
        func();
        
        },[])




  return (
    <div className = "assignment-create">
        <div className = "assignment-create1">
            {
                (usertype === "teacher")
                ?
                <Link className = "list-button list-tr" to ={`/createassignment?name=${name}&classname=${classname}&section=${section}&subject=${(subject)}&classcode=${classcode}`}><h4>Create Assignment</h4></Link>

                :
                <div></div>
            }
        </div>
        <div className = "assignment-create2">
            {
        arr.map( (item, index) => {
                 return( 
                     <div key = {index} className = "assignment-list back-glass">
                    <div className = "list-button ch">
                    <h4> {item}</h4>
                    </div>
                
                 
                     {/* </Link> */}

                     {
                        (usertype === "student")
                        ?
                        <Link className = "list-button" to={`/assignment?name=${name}&classname=${classname}&section=${section}&subject=${(subject)}&classcode=${classcode}&assignmentname=${item}`}>
                    <h4>Start</h4>
                     </Link>
                     :
                     <div className = "list-button list-bu">
                     <Link  className = "list-button lr" to = {`assignmentresponse?classcode=${classcode}&assignmentname=${item}`}>
                         <h4>Responses</h4>
                     </Link>
                  
                     </div>
                        

                    }
                     
                   
                     </div>
                    )
                })
            }

        </div>
    </div>
   
  )




}

export default Assignment;



