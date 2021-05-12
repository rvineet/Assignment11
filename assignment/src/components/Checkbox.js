import React from "react";

function Checkbox(props){

    return(

             <div className="checkbox-container">


                   
                <input type="checkbox"  value={props.name} onChange={props.onChange} />
                <span><p>{props.name}</p></span>






             </div>




    );
}


export default Checkbox; 