import { useEffect, useState } from "react";
import Resolution from '../hooks/resolution';

export default function ResolutionTest () {

    const resolution = Resolution();
    
    return (
        <div>
            <h3>Resolution Test</h3>
            {
                resolution <= 1100 ? <div className="bigResolutionDiv"></div> : <div className="smallResolutionDiv"></div>
            }
            
            
        </div>
    )
}