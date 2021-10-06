


import React,  { useState, useEffect }   from 'react';
import queryString from 'query-string';
import NavBar from '../NavBar/NavBar';

import './AssignmentResponse.css';
const AssignmentResponse = ({location}) => {
    const {classcode, assignmentname } = queryString.parse(location.search);
    const [ arr, setArr] = useState([]);

    useEffect( () => {
      
     
          
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
               "assignmentname":assignmentname
           
               

              })
  
}

async function func() {
  const response = await fetch(`https://nextsmartclass.herokuapp.com/assignmentresponse/get`,Options)

const data = await response.json();
console.log(data);
setArr(data.data);


}
func();




    },[]);


      function downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;
    
        // CSV file
        csvFile = new Blob([csv], {type: "text/csv"});
    
        // Download link
        downloadLink = document.createElement("a");
    
        // File name
        downloadLink.download = filename;
    
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
    
        // Hide download link
        downloadLink.style.display = "none";
    
        // Add the link to DOM
        document.body.appendChild(downloadLink);
    
        // Click download link
        downloadLink.click();
    }


      function exportTableToCSV(filename) {
        var csv = [];
        var rows = document.querySelectorAll("table tr");
        
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            
            for (var j = 0; j < cols.length; j++) 
                row.push(cols[j].innerText);
            
            csv.push(row.join(","));        
        }
    
        // Download CSV file
        downloadCSV(csv.join("\n"), filename);
    }
  

    
    return (
      <div className="sturesponse">
      <NavBar />
       
        
        
           
           <div className="stu-div">
               <table >
                 <tbody>
                 <tr>
                   <th>Name</th>
                   <th>Score</th>
                 </tr>
                 {
                //    arr.map((ele,index) => {
                     
                    
                         
                       arr.map((ele2,index) => {
                            return (
                              <tr key = {index}>
                              <td>{ele2.name}</td>
                              <td>{ele2.score}</td>
                              </tr>
                              

                            )
                            

                       })
                      }
                       
                     
                 
                     
                    

                 </tbody>
               </table>
             
         
      
      
      <button className="submit" onClick = {() => {exportTableToCSV('members.csv')}}>Download</button>
        </div>
        </div>
        
    )
}


export default AssignmentResponse;

