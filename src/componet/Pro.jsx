import React, { useState } from "react";

function Pro({obj}){

    return(
        <div>
                <ul>
                    {obj.map((u,i)=>(
                        <li key={i}>{u.name}</li>
                    ))}
                </ul>
        </div>
    )
}

export default Pro;