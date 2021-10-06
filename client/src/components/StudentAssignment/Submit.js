





async function Submit(classcode,assignmentname, name, score, subject, section, classname) { 

    const Options = {
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
                    "assignmentname":assignmentname,
                    "name":name,
                    "score":score
                  })
      
    }
    const res = await fetch(`https://nextsmartclass.herokuapp.com/assignmentresponse/save`,Options)
    const data = await res.json();
    window.location.href = `/classroom?name=${name}&classname=${classname}&section=${section}&subject=${(subject)}&classcode=${classcode}`;

  
    
    }
    

    export default Submit;
    