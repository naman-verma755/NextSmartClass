
import React, { useEffect, useState } from 'react';

import './CreateAssignment.css';
import queryString from 'query-string';




const CreateAssignment = ({location}) => {
    const {name,classname, subject, section, classcode } = queryString.parse(location.search);
    if(name === undefined || classname === undefined ||  subject === undefined  || section === undefined  || classcode === undefined)
    window.location.href = "/login";


    const [time, setTime] = useState(5);
    const [questionNumber, setQuestionNumber] = useState(5);
    const [format, setFormat] = useState("1") // there are two formats - 1. assign time to whole test. 2. assign time to each question.
    const [toggle, setToggle] = useState("1");
    const [Examname, setExamname] = useState("");
    useEffect(() => {


        var parent =  document.getElementById("contain");

        if(parent.childNodes[0] !== undefined)
        {
            while(parent.childNodes[0] !== undefined)
    parent.removeChild(parent.childNodes[0]);

        }

        for(var j = 0; j< questionNumber ; j++)
        {
        var nod = document.createElement("div");
        nod.setAttribute("class", "quiz-create");

        var node = document.createElement("textarea");
        node.setAttribute("class", "quest-create");
        node.setAttribute("placeholder", `Question no: ${j+1}`)
        nod.appendChild(node);
         const arr = [];
        for(var i = 1; i<=4; i++)
        {
            let fu = document.createElement("div");
            fu.setAttribute("class", String.fromCharCode(i+64));
            
            
             arr[i] = document.createElement("textarea");
             arr[i].setAttribute("class", "option-ans")
            arr[i].setAttribute("placeholder", `Option ${i}`)
             fu.appendChild(arr[i]);
             var tick = document.createElement("input");
            
             tick.type="radio";
             tick.name=`${j}+1`
           

             fu.appendChild(tick);
             
             nod.appendChild(fu);
        }
        
   
        parent.appendChild(nod);

    }


    
    })

    async function submit() {
        var or = {}
        or["format"] = format;
        or["time"] = time;
        or["number"] = questionNumber;
        or["name"] = Examname;
        var node = document.getElementsByClassName("quiz-create");
    
     for(var i = 0; i<node.length; i++)
     {
         
         var ans = "";
        for(var j = 0; j<node[i].childNodes.length; j++)
        {
            if(j === 0)
            {
                // console.log(node[i].childNodes[j]);
                
                 or["quiz"+i] =  node[i].childNodes[j].value 
                
            }
            else{
                // console.log(node[i].childNodes[j].childNodes[1].checked);
                 or[node[i].childNodes[j].className+i]=  node[i].childNodes[j].childNodes[0].value;
                 if(node[i].childNodes[j].childNodes[1].checked === true)
                 {
                     ans = node[i].childNodes[j].className;
                 }
            }
        }
        or["ans"+i]=ans;

     }

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
                   "data":or
                   
    
                  })
      
    }

   
    
    const response = await fetch(`https://nextsmartclass.herokuapp.com/assignment/create`,Options)
    const data = await response.json();
    window.location.href = `/classroom?name=${name}&classname=${classname}&section=${section}&subject=${(subject)}&classcode=${classcode}`;
    }
    
                 
  

  return (
      <div className="create-assignment">
                <div className = "create-page back-glass">
               <div className = "assign-head"><h2>Create Assignment</h2></div>
                <div className="format back-glass">
                    <div className = "format-sub" >
                        <h2>Choose Exam Time Format</h2>
                        <div className="semi">
                            <label htmlFor = "ht">Assign Time to whole exam (In minutes)</label>
                            <input id = "ht" className="semi-input" name = "go" type = "radio" value = "1" defaultChecked  onChange = {() => {setTime(5);setFormat("1");  setToggle("1")}}></input>
                            </div>
                            <div className = "semi" >
                            <label htmlFor = "ht1">Assign Time to each question (In minutes)</label>
                            <input  id="ht1" className="semi-input" name = "go" type = "radio" value = "2"  onChange = {() => {setTime(1); setFormat("2");setToggle("2")}}></input>
                            </div>
                        
                    </div>
                    <hr></hr>
          
           


            {
                (toggle === "1")
                ?
           
            <div className="semi">
            <label className = "semi-sub" htmlFor="que">Assign Time to whole exam (In minutes)</label>
               <select name="que" value = {time}  onChange = {(event) => {setTime(event.target.value)}}>
              
                    <option value="5"   >5</option>
                    <option value="10"  >10</option>
                    <option value="15"  >15</option>
                    <option value="20"  >20</option>
                    <option value="25"  >25</option>
                    <option value="30"  >30</option>
                    <option value="35"  >35</option>
                    <option value="40"  >40</option>
                    
                  
                </select>
            </div>
            :

           

            
            <div className = "semi">
               <label className = "semi-sub"  htmlFor="alloc">Time allocation for each question (In minutes) : </label>
               <select name="alloc" value = {time} onChange = {(event) => {setTime(event.target.value)}}>
                    <option value="1">1</option>
                    <option value="2"  >2</option>
                    <option value="4"  >4</option>
                    <option value="5"  >5</option>
                    <option value="10"  >10</option>
                    <option value="15"  >15</option>
                    <option value="20"  >20</option>
                    <option value="35"  >30</option>
                    
                    
                  
                </select>
            </div>
            

         }   
         <div className = "semi">
               <label className="semi-sub" htmlFor="num">Question No.: </label>
               <select name="num" value = {questionNumber} onChange = {(event) => {setQuestionNumber(parseInt(event.target.value))}}>
                    <option value="5">5</option>
                    <option value="10"  >10</option>
                    <option value="15"  >15</option>
                    <option value="20"  >20</option>
                    <option value="25"  >25</option>
                    <option value="30"  >30</option>
                    <option value="35"  >35</option>
                    <option value="40"  >40</option>
                    
                  
                </select>
            </div>

            
           </div>
           <div className = "question-section">
           <div className = "semi-head">
               <h4>Exam Name</h4> <input className = "semi-in" required placeholder = "enter exam name" onChange = {(event) => {setExamname(event.target.value)}}></input>
            </div>

            
            <hr></hr>
            
            

           
      
            <div id = "contain"></div>
            
            
            
     
        <button className = "submit-q" onClick = {() => {submit()}}>Submit</button>
     </div>
     </div>

      </div>

     

  )




}

export default CreateAssignment;

