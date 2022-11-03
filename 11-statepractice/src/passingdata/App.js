import React, {useState} from 'react';
// import './App.scss'
import '../App.scss'
import Body from './Body';
import Header from './Header';

function App() {
    const [user, setUser] = useState("Andreas")
    return (
        <div className="app_passing_data--container">
            <Header userName={user}/>
            <Body userName={user}/>
        </div>
     );
}

export default App;