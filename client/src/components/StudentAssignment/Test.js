
import React, { useEffect, useState } from 'react';

import './StudentAssignment.css';
import Submit from './Submit';
import Recognition from './Recognition';

const Test = ({data, recognition,format, time, datasize, classcode,name,subject, section,classname, assignmentname}) => {

       const [seconds, setSecond] = useState(0);
   const [minutes,setMinute] = useState(0);

   const [i,setI] = useState(0);
   const [visit, setVisit] = useState([]);
   const [x,setX] = useState();
   const [x3,setXo] = useState();

   const [sco, setSco] = useState(0);

   

   useEffect(() => {


    

    if(data !== undefined)
    console.log(data);
   if(data !== undefined )
   {
    let n = datasize;
       if(format === 1)
       {
       let parent =  document.getElementById("question-num");

       
       if(parent.childNodes[0] !== undefined && parent.childNodes[0] !== null)
       {
           while(parent.childNodes[0] !== undefined && parent.childNodes[0] !== null) 
   parent.removeChild(parent.childNodes[0]);

       }
     
       let pr = document.getElementById("question-num");
       for(let itr=0; itr<n; itr++) 
       {


           var nod = document.createElement("div");
           nod.setAttribute("class", "point-div")
           nod.setAttribute("id",`point-div${(itr)}`);

       
           nod.addEventListener("click", function() {
            
               
               setI(itr+1);
           })
           nod.innerHTML = itr+1;
           pr.appendChild(nod)
       

       }

    

       let arr = new Array(n+1);
       for(let itr=1; itr<=n; itr++)
       {
           arr[itr] = "0";
       }
       setVisit(arr);
     
    }
   }
   recognition.start();
  
  
    
      },[]);

      
   
   
   var start = 0;
   var sc = 0;

   function sa(k) {
    
       const synth = window.speechSynthesis;
  
       if(synth.speaking)
       synth.cancel();
       let n = datasize
       if(k === "total question")
       {
        
        let r = "total number of questions are " + (n-1);
        let speakk = new SpeechSynthesisUtterance(r);
        synth.speak(speakk);
       }

       if(k === "unanswered")
       {
   
           let speakk = new SpeechSynthesisUtterance("Unanswered questions are");
           synth.speak(speakk);
           for(let i=0; i<n; i++)
           {
          
                if(visit[i] === "0")
                {
                     speakk = new SpeechSynthesisUtterance(i+1);
                    synth.speak(speakk);
                }
           }
       }

       if(k === "answered")
       {
         
           let speakk = new SpeechSynthesisUtterance("answered questions are");
           synth.speak(speakk);
           for(let i=0; i<n; i++)
           {
        
                if(visit[i] !== "0")
                {
                    
                     speakk = new SpeechSynthesisUtterance((i+1));
                    synth.speak(speakk);
                }
           }
       }
       if(k === "repeat question")
       {
      
       
       let speakText1 = new SpeechSynthesisUtterance(data[`quiz${i}`]);
     
           
           synth.speak(speakText1);
       }
       if(k=== "A" || k==="B" || k=== "C" || k === "D")
       {
           let speakText1 = new SpeechSynthesisUtterance(`option ${k} is marked`);
           synth.speak(speakText1);
       }
       if(k === "repeat options")
       {
      
      //  const synth = window.speechSynthesis;
        for(let j = 65; j<=68; j++)
        {
            let op = String.fromCharCode(j);
            let speakText1 = new SpeechSynthesisUtterance("Option"+op);
           
            let speakText2 = new SpeechSynthesisUtterance(data[`quiz${i}`]);
           synth.speak(speakText1);
           synth.speak(speakText2);
   
        
        }

       }

       if(k === "submit")
       {
        let speakText1 = new SpeechSynthesisUtterance("Your response has been submitted");
        synth.speak(speakText1);
       }

       if(k === "want to")
       {
        let speakText1 = new SpeechSynthesisUtterance("do you want to submit");
        synth.speak(speakText1);

       }
    
}

   




    function func3(loc) {
      
       if(loc === "Previous")
       {
           setI(i-1);
       }
       else if (loc === "Next")
       {
           setI(i+1);
       }
       else if(loc === "Submit")
       {
        sa("submit");
    
        let n = datasize;
        let count =0;
        
        for(let itr=0; itr<n; itr++)
        {
            
            if(visit[itr] ===  data[`ans${itr}`].toLowerCase())
            count+=1;
        }
        clearInterval(x3);
        clearInterval(x);
        Submit(classcode, assignmentname, name, count, subject, section, classname)
     
       }
       

    }
    useEffect(() => {
        if(minutes != undefined && seconds != undefined && minutes === -1 && seconds === 0)
        {

             if(format === 1)
            {
               
            func3("Submit");
         
            
            }
            else if(format === 2)
            {
              
                if(i+1 === datasize)
                {
            
                func3("Submit");
                
                }
                else
                setI(i+1);
            }
        }

    },[minutes,seconds]);

   
   


 async function func4() {
       
  
    const synth = window.speechSynthesis;

    if(synth.speaking)
       synth.cancel();

  
    
    var speakText1 = new SpeechSynthesisUtterance("Question number"+(i+1));
       
       var speakText2 = new SpeechSynthesisUtterance(data[`quiz${i}`]);
     synth.speak(speakText1);
     synth.speak(speakText2);
     for(let j = 65; j<=68; j++)
     {
         let op = String.fromCharCode(j);
         speakText1 = new SpeechSynthesisUtterance("Option"+op);
        
         speakText2 = new SpeechSynthesisUtterance(data[`${op}${i}`]);
        synth.speak(speakText1);
        synth.speak(speakText2);
        

     }
    
   
    console.log("Time=",time);
     let ti = parseInt(time)*60000;
    var countDownDate = new Date(Date.now()+ti).getTime();
    
     
        
        if(format === 2 || (format === 1 && sco === 0))
        {
            var minut, secon;
         let ki ;
         
         ki = setInterval(  function() {
    
            // Get today's date and time
    
    
            var now = new Date().getTime();
        
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
              
            // Time calculations for days, hours, minutes and seconds
               
            var minut= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var secon = Math.floor((distance % (1000 * 60)) / 1000);
              
            setMinute(minut);
            setSecond(secon);
            
    
       
        
   
      
         
            if(distance<=1)
            {
               
            if(format ===1 )
            clearInterval(ki);
            
            

         }
        }, 1000);
        if(format === 1)
        setXo(ki);
        if(format === 2)
            setX(ki);
       
        }
    
       }
    


    
     
    
    useEffect( () => {
        let fon = -1;
        if( visit !== undefined && visit[i] !== undefined)
        {
            
            if(visit[i]!==undefined)
            {
                
            fon = visit[i].charCodeAt(0);
            fon -= 97;
           }
           
        }

        let nod = document.getElementsByClassName("Options");
        for(let itr = 0; itr<nod.length; itr++)
        {
             
                if(fon !== -1 && fon === itr)
                {
                    nod[itr].setAttribute("style", "background-color:purple; color: white;");
                }
                else
                {
                nod[itr].setAttribute("style", "background-color:rgba(221, 72, 214, 0.15)");
                }
            
        }
         
        if(i>5)
        {
     
        return;
        }
       
        if(format == 2)
        clearInterval(x);
         func4();
         
         setSco(2);
       
  
},[i])






    function func5(ele_id)
    {
        let nod = document.getElementsByClassName("Options");
        for(let itr = 0; itr<nod.length; itr++)
        {
             
                nod[itr].setAttribute("style", "background-color:rgba(221, 72, 214, 0.15)");
             
            
        }

         nod = document.getElementById(ele_id)
        nod.setAttribute("style", "background-color:purple; color: white;");

       if(format === 1)
       {
        nod = document.getElementById(`point-div${(i)}`)
        nod.setAttribute("style", "background-color:green; color: white;");
       }

        let arr = visit;
        arr[i] = ele_id;
        setVisit(arr);
    }
    

 
                 
  

  return (
      <div className="stu-assingn">
                 <Recognition recognition = {recognition} Submit={Submit} classcode={classcode} assignmentname={assignmentname} name={name} x={x} x3={x3} format={format} i={i} setI={setI} sa={sa} data={data} datasize={datasize} visit={visit} subject={subject} section={section} classname={classname}/>

            <div className="super-class">
            <div className="institute">{assignmentname}</div>
            <div  className="timer">
                <div className="second">{seconds}</div>
            <div className="minute">{minutes}</div>
            
            </div>
        <div className="test-main">
            
        
            {
                (data !== undefined)
                ?
        
            <div className="quiz">
                  <div className="question-no"></div>
                  

                  < div className="quest">
                 { data[`quiz${i}`]} 
                  </div >
                  <div className="division">
                  <div className="Options-main">
                  <div className="Options" id = "a" onClick = {(event) => {func5(event.target.id)}}>
                  { data[`A${i}`]}
                  </div>
                  <div className="Options"  id = "b" onClick = {(event) => {func5(event.target.id)}}>
                  { data[`B${i}`]}
                  </div>
                  <div className="Options"  id = "c" onClick = {(event) => {func5(event.target.id)}}>
                  { data[`C${i}`]}
                  </div>
                  <div className="Options"  id = "d" onClick = {(event) => {func5(event.target.id)}}>
                  { data[`D${i}`]}
                  </div>
                  </div>
                  {(format === 1)
                  ?
                  <div id="question-num">
                  </div>
                  :
                  <div></div>
                  }
                  </div>
                  <div className="quiz-buttons">
                  {
                      (format === 1 && i !== 1)
                      ?
                  <button className="Prev" onClick = {(event) => {func3(event.target.innerHTML)}}>Previous</button>
                      :
                      <div></div>
                  } 
                    {
                      (format === 1 || format === 2)
                      ?
                  <button className="sub" onClick = {(event) => {func3(event.target.innerHTML)}}>Submit</button>
                      :
                      <div></div>
                  } 
                    {
                      ((format === 2 || format === 1) && i !== datasize-1)
                      ?
                  <button className="Next" onClick = {(event) => {func3(event.target.innerHTML)}}>Next</button>
                      :
                      <div></div>
                  } 
                  </div>

                  
            </div>
            :
            <div></div>
                }
       
        </div>
        </div>
       
      </div>

     

  )




}

export default Test;



