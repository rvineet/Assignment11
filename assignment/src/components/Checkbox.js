import React from "react";

function Checkbox(props){

    return(

             <div className="checkbox-container">


                   
                <input type="checkbox"  value={props.value} onChange={props.onChange} />
                <span><h5>{props.name}</h5></span>






             </div>




    );
}


export default Checkbox; 