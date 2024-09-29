import React from 'react';
import '../style.css'; // Optional: Create a CSS file for styling


const Page2 = () => {
  return (
    <div id='page2'>
      <video autoPlay muted loop>
                <source src="/earthBg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div id="center">
                <div id='joinDiv'>Join Us</div>
                <div>Revolutionize</div>
                <div>Education</div>
                <div>With AI</div>
            </div>
    </div>
  );
};


export default Page2;
