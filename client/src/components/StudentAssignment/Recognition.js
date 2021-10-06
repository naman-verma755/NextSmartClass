





const Recognition = ({recognition, Submit,classcode, assignmentname, name, x, x3, format, i , setI, sa, data, datasize, visit, subject, section,classname}) => { 
  
    // recognition.onstart = ()=> {
    //     setInstruction('Voice recognition is on');
    // }
    
    recognition.onend = ()=> {
        
        // setInstruction('Voice recognition is off');
        
      
        recognition.start();
       
        
       
    }
    // recognition.onspeechend = () => {
    //     setInstruction('No activity');
    // }
    
    // recognition.onerror = () => {
    //     setInstruction('Try again');
    // }

    recognition.continuous =false;
    recognition.onresult =  function(event) {
        var current = event.resultIndex;
    
        var transcript = event.results[current][0].transcript;
       
     
        var t = transcript.toLowerCase();
        var t2 = data[`ans${i}`].toLowerCase();
        

     let arr1 = t.split(" ");

            if(arr1.indexOf("option") !== -1)
            {

                if(arr1[1] !== undefined)
                var arr2 = arr1[1].split("");
                let ele=-1;
                for(let va = 97; va <=100; va++)
                {
                    
                    if(arr2 !== undefined)
                    {
                   let k =  arr2.indexOf(String.fromCharCode(va));
                   if(k !== -1)
                   ele = k;
                    }
                }

                if(ele !== -1)
                {
                   
                    sa(arr2[ele].toUpperCase());
                    
                    let nod = document.getElementsByClassName("Options");
                    if(format === 1)
                    {
                    let que = document.getElementById(`point-div${i}`);
                    que.setAttribute("style","background-color:green;");
                    }
                    for(let it = 0; it<nod.length; it++)
                    {
                        
                      
                        if(nod[it].id.toUpperCase() === arr2[ele].toUpperCase())
                        {
                            visit[i] = nod[it].id;
                            nod[it].setAttribute("style", "background-color:purple; color: white;");
                        }
                        else
                        {
                            nod[it].setAttribute("style", "background-color:rgba(221, 72, 214, 0.15)");
                        }
                    }
                    
                }
            }
      
        if(transcript === "repeat options" || transcript === "repeat question")
        {

            sa(transcript);
            
        }
        if(transcript === "unanswered" )
        {
            sa(transcript);
        }
        if(transcript === "answered" )
        {
            sa(transcript);
        }
        if(transcript === "total question" || transcript === "total questions")
        {
            sa("total question");
        }
        
        if(t === t2)
        {
            
        
        }
        let arr3 = t.split(" ");
        
        if(format === 1 && arr3[0] === "jump")
        {
            let cha = arr3[1];
            let num = arr3[1].slice(1);
            num = parseInt(num);
           
            setI(num);
        }

        if(t === "next")
        {

            if(i+1<=datasize-1)
            {
            
            setI(i+1);
            if(format === 2)
            clearInterval(x);
            }
            else
            {
                sa("want to");
               
            }
           
        }

        if(t === "submit")
        {
            sa("submit");
            let n = 5
            let count =0;
            for(let itr=0; itr<n; itr++)
            {
                
                if(visit[itr] ===  data[`ans${itr}`].toLowerCase())
                count+=1;
            }
            
            clearInterval(x3);
        clearInterval(x);
        Submit(classcode, assignmentname, name, count,subject, section, classname)
       

        }
        if(format === 1 && t === "previous")
        {
       
            clearInterval(x3);
        clearInterval(x);
        if(i-1>=0)
           setI(i-1);
            
        }
        
       
    
    }



    return (
        <div></div>
    )

    
    }
    

    export default Recognition;
    