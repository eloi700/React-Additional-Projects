import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState(['Hey', 'Dude', 'How are you']);

  return (
    <div className='app_container'>
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread{' '}
          {messages.length === 1 ? 'message' : 'messages'}
        </h1>
      )}
    </div>
  );
}

export default App;

// CONDITIONAL RENDERING QUIZ
/*
1.) WHAT IS "CONDITIONAL RENDERING"?
    When we want to only sometimes display something on the page based on a condition of some sort.

2.) WHEN WOULD YOU USE &&?
    When you want to either display something or NOT display it.

3.) WHEN WOULD YOU USE A TERNARY?
    When you need to decide which thing among 2 options to display.

4.) WHAT IF YOU NEED TO DECIDE BETWEEN > 2 OPTIONS ON WHAT TO DISPLAY?
    Use an "if else if else" conditional or a "switch" statement.
*/

