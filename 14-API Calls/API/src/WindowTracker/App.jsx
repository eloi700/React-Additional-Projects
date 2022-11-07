import React, {useState} from 'react'
import WindowTracker from "./windowtracker"
import '../App.scss';

export default function App() {

    const [show, setShow] = useState(true);

    function toggleShow(){
        setShow(prevShow => !prevShow);
    }

    return (
        <div className="app_container">
            <button onClick={toggleShow}>
                Toggle Window Tracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}