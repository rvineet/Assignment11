import React from "react";
import ReactDOM from "react-dom";


function Course(props){
return(
<div className="course">

    <div className="image">

       <img src={props.img} alt = "Course pic" />
    </div>

    <div className="name">
       <p>{props.name}</p> 

    </div>

</div>
);
}


export default Course;