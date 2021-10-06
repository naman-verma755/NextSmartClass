import React  from 'react';
import './StudentAssignment.css';


const Instructions = ({type,setToggle}) => {

 
  async  function star() {


    let nod = document.getElementById("start");
    nod.disabled = true;
    nod.style.cursor = "not-allowed";
        
        const synth = window.speechSynthesis;
       
       

        var ins = "    One  minute is left for your exam to start"

        

        var speakText = new SpeechSynthesisUtterance(ins);
       
        // speakText.onerror = e => {
        //     console.log("error=",e);
        // }
        
        speakText.rate = 0.7;

        synth.speak(speakText);
     

     


       var countDownDate = new Date(Date.now()+5000).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    clearInterval(x);
   setToggle(1)
 
  }
}, 60000);
      
       
    }

    
    

    return (
        
        <div className="instructions">
       
              {/* <div className="tu"> */}
                  <h2>Read the instructions carefully -</h2>
                  {
                    (type === 1)
                    ?
                    <div>
                    <ul>
                      <li>Attempt all the questions</li>
                      <li>All the questions are compulsory.</li>
                      <li>If time is passed, your response would be automatically submitted</li>
                      <li>You can control whole quiz with some voice commands, that are -</li> 
                      
                      </ul>
                      <ol>
                        <li><strong>Repeat question</strong> - If you want to listen questions again.</li>
                        <li><strong>Repeat Options</strong> - If you want to listen options again.</li>
                        <li><strong>Total Questions</strong> - If you want to listen the number of questions.</li>
                        <li><strong>Option A</strong> - If you want to mark option a as an answer</li>
                        <li><strong>Option B</strong> - If you want to mark option b as an answer</li>
                        <li><strong>Option C</strong> - If you want to mark option c as an answer</li>
                        <li><strong>Option D</strong> - If you want to mark option d as an answer</li>
  
                        <li><strong>Jump to</strong> - If you want to jump to any question.</li>
                        <li><strong>Unanswered</strong> - If you want to listen  the number of unanswered questions.</li>
                        <li><strong>answered</strong> - If you want to listen  the number of answered questions.</li>
                        <li><strong>Next</strong> - If you want to go to next question.</li>
                        <li><strong>Previous</strong> - If you want to go to previous question.</li>
                        <li><strong>submit</strong> - If you want to the submit the quiz.</li>
                        
  
                      </ol>
                    </div>
                  :
                  <div>
                  <ul>
                    <li>Attempt all the questions</li>
                    <li>All the questions are compulsory.</li>
                    <li>If time is passed, your response would be submitted automatically.</li>
                    <li>You can control the whole quiz with some voice commands, that are -</li> 
                    
                    </ul>
                    <ol>
                      <li><strong>Repeat question</strong> - If you want to listen questions again.</li>
                      <li><strong>Repeat Options</strong> - If you want to listen options again.</li>
                      <li><strong>Total Questions</strong> - If you want to listen the number of questions.</li>
                      <li><strong>Option A</strong> - If you want to mark option a as an answer</li>
                      <li><strong>Option B</strong> - If you want to mark option b as an answer</li>
                      <li><strong>Option C</strong> - If you want to mark option c as an answer</li>
                      <li><strong>Option D</strong> - If you want to mark option d as an answer</li>

                
                    
                      <li><strong>Next</strong> - If you want to go to next question.</li>
                  
                      <li><strong>submit</strong> - If you want to the submit the quiz.</li>
                      

                    </ol>
                  </div>
                    
                  }
                
                
                  <ul>
 
</ul>

              <div className = "start-head"><strong>Click on start button to start the quiz</strong></div>
            
            
            <button id="start" onClick = {() => star()}>Start</button>
      

        </div>
    )
}


export default Instructions;
