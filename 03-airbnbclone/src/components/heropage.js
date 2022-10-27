import React from 'react';
// import heropage from '../assets/photo-grid.png'

function HeroPage() {
    return (
        <section className="heropage_container">
            <img className='heropage_image' src={'../assets/photo-grid.png'} alt="hero"/>
            <div className="hero_text">
                <h1 className="hero_title">Online Experiences</h1>
                <p className="hero_para">Join unique interactive activities led by <br /> one-of-a-kind hosts-all without leaving <br /> home.</p>
            </div>
        </section>
     );
}

export default HeroPage;