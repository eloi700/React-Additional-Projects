import React from 'react'

function Body(props) {
    return (
        <section>
            <h1 className='body_greeting'>Welcome Back, {props.userName}!</h1>
        </section>
     );
}

export default Body;