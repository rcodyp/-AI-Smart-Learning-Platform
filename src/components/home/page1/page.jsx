import React from 'react';
import '../style.css';
import Spline from '@splinetool/react-spline';

const Page1 = () => {
    return (
        <div id="page1">
            <div id="nav">
        <div class="nav-con">
        </div>
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    </div>
            <div id="content">
            <Spline id='spline'
       scene="https://prod.spline.design/Mj8qcXA5N6AImdZ9/scene.splinecode" 
       />
                <div id="overlay">
                    <div id="over1">
                        <div>
                            <h1>Personalized Education</h1>
                            <h1>Powered by AI</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
