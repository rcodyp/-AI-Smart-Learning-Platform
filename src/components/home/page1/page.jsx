import React from 'react';
import '../style.css'; // Import your CSS file

const Page1 = () => {
    return (
        <div id="page1">
            <div id="nav">
                <div>Logo</div>
                <div>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </div>
            </div>
            <div id="content">
                <img src='/land.jpeg' alt="" />
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
