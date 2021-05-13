  
// eslint-disable-next-line
import React, { useState } from "react";
import Course from "../components/Course";
import courses from "../courses";
import Checkbox from "../components/Checkbox";
import check from "../checkNames";










function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const[checkedTerm, setCheckedTerm] = useState('');
  
const handleChange = (value) => {
 

if(checkedTerm.includes(value)){
   setCheckedTerm(checkedTerm.replace(value, ""))
 }
   else{
     setCheckedTerm(checkedTerm.concat(value));
   }
  

console.log(checkedTerm)
  
}

  function createCheck(check){


    return (
  <Checkbox 
  key = {check.id}
  name = {check.name}
  value = {check.value}
  onChange ={(event) => {handleChange(event.target.value)}}
  />
  
    );
  }



  function createCard(course){
    return(
  <Course
  key = {course.id}
  img = {course.img}
  name = {course.name}
      />
    );
  }

  

  
  return (
    <div className="App">
    
    
    <div className="left"><h3>Course Categories </h3>
    {check.map(createCheck)}
    
    
    
     </div>

    <div className="right">
    
        <div className="top"><h3>Search Courses</h3>
            <input className="input" onChange={event => {setSearchTerm(event.target.value)}}/>
         </div> 

       <div className="bottom">  {courses.filter((val)=>{

         if(checkedTerm.length)
         if(checkedTerm.length>9){
           return val;
         }
               if(searchTerm==='' && checkedTerm===""){
                    return val;
                      }
               else if(searchTerm==="" && val.name.toLowerCase().includes(checkedTerm.toLowerCase())){
                    return val;
                      }
              else if(searchTerm!=="" && val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
       } 

                  ).map(createCard)} </div>
   
        </div>
     
    </div>
  );
}



export default App;