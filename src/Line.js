import { useEffect } from "react";


export default function Line({ line, toggleEdit }) {
    const { edit, isByod, cost } = line;

    return (
        <div>
            {
                edit === true
                    ?
                    <h1>Test</h1>
                    :
                    <div>
                        <h3>{line.deviceName}</h3>
                        <button onClick={()=> toggleEdit(line)}>Edit</button>
                        <h4>{isByod ? 'BYOD' : 'Null'}</h4>
                        <h4>{cost}</h4>
                    </div>
            }
        </div>
    )
}