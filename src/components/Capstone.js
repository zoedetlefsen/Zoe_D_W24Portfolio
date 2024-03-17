import React from 'react';
import '../assets/styles/Capstone.css';
const Capstone = () => {
  return (
    <div className="capstone-container">
      <h1>Capstone Project</h1>
      
      <div className="pdf-container">
        <h2>Project Summary</h2>
        <iframe src={`${process.env.PUBLIC_URL}/projectsummary.pdf`} title="Project Summary"></iframe>
      </div>

      <div className="pdf-container">
        <h2>Project Vision</h2>
        <iframe src={`${process.env.PUBLIC_URL}/projectvision.pdf`} title="Project Vision"></iframe>
      </div>

      <div className="pdf-container">
        <h2>Project/Business Requirements</h2>
        <iframe src={`${process.env.PUBLIC_URL}/requirements.pdf`} title="Project Requirements"></iframe>
      </div>

      <div className="pdf-container">
        <h2>Project Plan</h2>
        <iframe src={`${process.env.PUBLIC_URL}/projectplan.pdf`} title="Project Plan"></iframe>
      </div>

      <div className="pdf-container">
        <h2>Requirements Analysis and Design</h2>
        <iframe src={`${process.env.PUBLIC_URL}/requirementsanddesign.pdf`} title="Requirements Analysis"></iframe>
      </div>

      <div className="resource-container">
        <h2>Wireframes/Mockups</h2>
        <button onClick={() => window.open('https://www.figma.com/file/g6Ukv2LLhXJ0tUgvEszh5b/Eco-Track-Prototypes?type=design&node-id=3%3A2&mode=dev&t=61T1JPCZ8XNUeb6e-1', '_blank')}>
            Click to View Wireframes
        </button>
     </div>

      <div className="pdf-container">
        <h2>Status Reports</h2>
        <iframe src={`${process.env.PUBLIC_URL}/statusreport.pdf`} title="Status Reports"></iframe>
      </div>

      <div className="pdf-container">
        <h2>System Implementation</h2>
        <iframe src="" title="System Implementation"></iframe>
      </div>

    </div>
  );
};

export default Capstone;
