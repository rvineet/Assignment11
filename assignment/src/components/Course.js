// eslint-disable-next-line
import React from "react";
// import ReactDOM from "react-dom";


function Course(props){
return(
<div className="course">

    <div className="image">

       <img src={props.img} alt = "Course pic" />
    </div>

    <div className="name">
       <h4>{props.name}</h4> 

    </div>

</div>
);
}


export default Course;