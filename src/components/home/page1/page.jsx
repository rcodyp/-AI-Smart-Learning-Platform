import React from 'react';
import '../style.css'; // Import your CSS file
import landImage from '../Assets/land.jpeg'; // Import the image
import { RiArrowRightLine } from 'react-icons/ri'; // Import an icon (ensure you have react-icons installed)

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
                <img src={landImage} alt="" />
                <div id="overlay">
                    <div id="over1">
                        <div>
                            <h1>Personalized Education</h1>
                            <h1>Powered by AI</h1>
                        </div>
                        <div><RiArrowRightLine /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
