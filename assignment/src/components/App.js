// eslint-disable-next-line
import React, { useState } from "react";
import Course from "../components/Course";
import courses from "../courses";




function createCard(course){
  return(
<Course
key = {course.id}
img = {course.img}
name = {course.name}
    />
  );
}



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
    
    
    <div className="left"><h3>Course Categories </h3>
    {/* <input type="checkbox" value="Data Science" onChange={event => {setSearchTerm(event.target.value)} } checked/> */}
    
    
    
     </div>

    <div className="right">
    
   <div className="top"><h3>Search Courses</h3>
     <input className="input" onChange={event => {setSearchTerm(event.target.value)}}/>
     </div> 

<div className="bottom">  {courses.filter((val)=>{
  if(searchTerm===''){
    return val;
  }
  else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
    return val;
  }
}

).map(createCard)} </div>
   
    </div>
     
    </div>
  );
}

export default App;
