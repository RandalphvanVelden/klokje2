import { useState } from "react";
import TimezoneSelect from "react-timezone-select"


const Timezone = () =>{
    const [selectedTimezone, setSelectedTimezone] = useState({})

    return(
        <div className="Timezone">
            <h2>react-timezone-select</h2>
            <blockquote>Please make a selection</blockquote>
            <div className="selectwrapper">
                <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
                />
            </div>
            <h3>Output:</h3>
            <div>
                <pre>
                {JSON.stringify(selectedTimezone, null, 2)}
                </pre>
            </div>
        
        </div>
    )
   

}

export default Timezone;