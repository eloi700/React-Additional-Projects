import React, {useState} from 'react'

function Joke(props) {
    const [isShown, setIsShown] = useState(false)

    function showPunchline(){
        setIsShown(prevIsShown => !prevIsShown)
    }

    return (
        <div>
            { props.setup && <h3 className='setup'>{props.setup}</h3> }
            {isShown && <p className='punchline'>{props.punchline}</p>}
            <button className='punchline_button' onClick={showPunchline}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
     );

// Conditional Rendering
/**
const cond1 = false
const cond2 = false
if(cond1 && console.log("Hello there")){
    // this code will NOT run since cond1 is FALSE
}

// From above example a button is provided isShown is False and thus, punchline will not be shown or vice versa - toggle prevIsShown

*/


}
export default Joke;