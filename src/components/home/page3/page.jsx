// src/components/home/Page3.jsx

import React from 'react';
import '../style.css'; // Ensure the CSS file path is correct

const Page3 = () => {
    return (
        <div id="page3">
            <div id="circle">
                {/* Optional: Add styles for the circle if needed */}
            </div>
            <div className="container">
                <div id="part1">
                    <img
                        className="image"
                        src="https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg"
                        alt="Web Development"
                    />
                    <div>
                        <div className="title">Web Development</div>
                        <div className="about">
                            Web development involves building websites and web applications using technologies like HTML, CSS, and JavaScript. It includes both front-end (design and user interaction) and back-end (server and database) development.
                        </div>
                    </div>
                </div>
                <div id="part2">
                    <img
                        className="image"
                        src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/10/full/1704901824-8672.jpg?im=FitAndFill=(826,465)"
                        alt="Cyber Security"
                    />
                    <div>
                        <div className="title">Cyber Security</div>
                        <div className="about">
                            Cybersecurity protects systems, networks, and data from digital threats. It ensures the security and privacy of information through tools like encryption and firewalls.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
