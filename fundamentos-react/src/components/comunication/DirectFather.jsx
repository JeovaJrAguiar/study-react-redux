import React from "react";
import DirectChild from "./DirectChild";

 export default props => {
    return (
        <div>
            <DirectChild name="Fernando" old={23} nerd={true}/>
            <DirectChild name="Gabriel" old={23} nerd={false}/>
        </div>
    )
 }