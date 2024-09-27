import React from 'react';
import '../style.css'; // Ensure your styles are included

const Page4 = () => {


  const handleButtonClick = () => {
    window.open('http://localhost:8501', '_blank'); // Open in a new tab
  };

  return (
    <div id="page4">
      <div className="container">
        <div id="part3">
          <img
            className="image"
            src="https://images.spiceworks.com/wp-content/uploads/2023/10/12122423/mobile-app-development.jpg"
            alt="App Development"
          />
          <div>
            <div className="title">App Development</div>
            <div className="about">
              App development focuses on creating software for mobile and desktop platforms. It includes both native and cross-platform development, emphasizing usability and performance.
            </div>
            <button  onClick={handleButtonClick}>Quizz</button>
          </div>
        </div>
        <div id="part4">
          <img
            className="image"
            src="https://nietm.in/wp-content/uploads/2022/12/AI3.png"
            alt="Artificial Intelligence"
          />
          <div>
            <div className="title">Artificial Intelligence</div>
            <div className="about">
              AI/ML involves creating systems that mimic human intelligence and learn from data. These technologies enable automation, data analysis, and smarter decision-making across various industries.
            </div>
          </div>
          <button onClick={handleButtonClick}>Quizz</button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
