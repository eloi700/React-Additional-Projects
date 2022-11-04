import React, { useState } from 'react'

function App() {
    const [messages, setMessages] = useState(["hey", "how are you?"])


    return (
        <div className="app_container">
            { messages.length > 0 && <h1 className="message">You have {messages.length} unread messages!</h1>}
        </div>
     );
}

export default App;
