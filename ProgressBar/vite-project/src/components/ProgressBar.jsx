import React from "react";

function ProgressBar({progressPercentage, backgroundColor}) {
    return (
        <div className="progressbar-wrapper">
            <div className="progress-filler" style={{width : `${progressPercentage}%`, backgroundColor : `${backgroundColor}`}}></div>
        </div>
    )
}

export default ProgressBar;