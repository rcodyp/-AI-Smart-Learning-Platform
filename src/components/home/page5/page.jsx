import React from "react";
import "../style.css"; // Ensure your styles are included

const Page5 = () => {
  return (
    <div id="page5">
      <div id="about-section">
        <h1>About Our Platform</h1>
        <div className="underline"></div>
        <div id="about-discription">
          <p>
            At LearnAI, our mission is to empower students of all levels to
            achieve their educational goals through personalized learning
            experiences. We harness the power of AI to create a dynamic testing
            environment that adapts to individual skill levels, ensuring that
            every user receives the support they need.
          </p>
        </div>
        <div id="img-text">
          <div id="about-image">
            <img src="./public/Space.png" alt="" />
          </div>
          <p>
            Our platform offers AI assessments in easy, medium, and hard levels.
            Users are evaluated and assigned skill levels—beginner,
            intermediate, or advanced—allowing us to create personalized
            learning paths for each student.
          </p>
        </div>
        <div id="about-benifits">
          <h2>User Benefits</h2>
          <ul>
            <li>
              Customized Learning Paths: Tailored educational content designed
              specifically for you.
            </li>
            <li>
              Flexible Learning: Access materials anytime, anywhere to fit your
              schedule.
            </li>
            <li>
              Progress Tracking: Monitor your improvement with detailed
              performance analytics.
            </li>
            <li>
              Engaging Content: Interactive lessons and resources that make
              learning enjoyable.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page5;
