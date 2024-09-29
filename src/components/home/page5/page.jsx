import React from "react";
import "../style.css"; // Ensure your styles are included
import Spline from '@splinetool/react-spline';


const Page5 = () => {
  const handleButtonClick = () => {
    window.open("http://localhost:8501", "_blank"); // Open in a new tab
  };

  return (
    <div id="page5">
    <div class="container1">
      <div class="image-container">
        <Spline 
          id="spline2"
          scene="https://prod.spline.design/KPfNCE48Kn3YGLed/scene.splinecode" 
        />
      </div>
      <section class="about2">
        <div class="text-content">
          <h1>About Our Learning Platform</h1>
          <p>
            At LearnAI, our mission is to empower students of all levels to achieve their educational goals through personalized learning experiences. We harness the power of AI to create a dynamic testing environment that adapts to individual skill levels, ensuring that every user receives the support they need.
          </p>
          <h2>Our Process</h2>
          <p>
            Our platform utilizes AI-driven assessments categorized into three difficulty levels: easy, medium, and hard. As users complete these tests, our intelligent system evaluates their performance and assigns a skill level— beginner, intermediate, or advanced. Based on these evaluations, we curate personalized learning paths tailored to each student’s unique needs and learning style.
          </p>
          <h2>User Benefits</h2>
          <ul>
            <li>Customized Learning Paths: Tailored educational content designed specifically for you.</li>
            <li>Flexible Learning: Access materials anytime, anywhere to fit your schedule.</li>
            <li>Progress Tracking: Monitor your improvement with detailed performance analytics.</li>
            <li>Engaging Content: Interactive lessons and resources that make learning enjoyable.</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
  
  );
};

export default Page5;
