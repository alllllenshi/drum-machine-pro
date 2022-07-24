import React,{useState, useContext} from 'react'
import { Context } from '../Context'


const Display = props => {

    
    const {started,setStarted} = useContext(Context)
    const [displayContent,setDisplayContent] = useState("Drum Machine Master(test version)")

    const start = () => {
        setStarted(!started)
    
    }


    return (
        <div className="Display">
            <div>{displayContent}</div>
            <button className="Display-enter" id="test3" onClick={start}>{started?"started":"paused"}</button>
         
        </div>
    )
}
export default Display