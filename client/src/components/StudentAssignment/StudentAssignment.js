
import React, { useEffect, useState } from 'react';


import queryString from 'query-string';



import Test from './Test';
import Instructions from './Instructions';
import NavBar from '../NavBar/NavBar';
import './StudentAssignment.css';

const inStyle = { background: "black"};

 

const StudentAssignment = ({location}) => {
    const {name,classname, subject, section, classcode, assignmentname } = queryString.parse(location.search);
if(name === undefined || classname === undefined ||  subject === undefined ||  section === undefined ||  classcode === undefined ||  assignmentname === undefined  )
window.location.href = "/login";  
const[data,setData] = useState();
   const[recognition, setRecognition] = useState();
   const[time, setTime] = useState();
   const [toggle,setToggle] = useState(0);
   const [format, setFormat] = useState("");
   const [datasize, setDatasize] = useState();
   



useEffect(() => {

    var speechRecognition = window.webkitSpeechRecognition;

    var r = new speechRecognition();
    console.log(r);
    setRecognition(r);

},[])


useEffect ( async () => {


         
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
                   "classcode":classcode,
                   "name":assignmentname
                   
                   
    
                  })
      
    }
    
    const response = await fetch(`https://nextsmartclass.herokuapp.com/assignment/get`,Options)
    const data = await response.json();
    setData(data.data);
    setFormat(parseInt(data.data["format"]))
    setTime(parseInt(data.data["time"]));
    setDatasize(parseInt(data.data["number"]))
 
},[])
   




 

   
                 
  

  return (
      <div className="stu-assingment">
          <NavBar />
          
          
          {
              (toggle === 1)
              ?
              <Test data = {data} recognition = {recognition} format = {format} time = {time} datasize = {datasize} classcode = {classcode} subject={subject} section={section} name = {name} classname={classname} assignmentname = {assignmentname}/>
              :
                  <Instructions type = {1} setToggle = {setToggle}/>
                  

          }
          
          
          
         
      </div>

     

  )




}

export default StudentAssignment;





