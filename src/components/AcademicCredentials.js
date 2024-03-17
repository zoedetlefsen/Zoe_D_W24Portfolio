import React from 'react';
import '../assets/styles/AcademicCredentials.css'; 
import profilePic from '../assets/degree.jpg'; 

const AcademicCredentials = () => {
  return (
    <div className="academic-credentials">
      <h1>Academic Credentials</h1>
      <div className="credentials-container">
        <div className="transcript">
          <h2>Dean's Letter</h2>
          <object 
            data={`${process.env.PUBLIC_URL}/Dean_letter_101176144.pdf`} 
            type="application/pdf" 
            width="100%" 
            height="1000px">
            <iframe 
                src={`${process.env.PUBLIC_URL}/Dean_letter_101176144.pdf`}
                width="100%" 
            height="10000px" style={{ border: 'none' }}>
                <p>This browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/your_resume_filename.pdf`}>Download PDF</a>.</p>
            </iframe>
            </object>
        </div>
        <div className="degree">
          <h2>Degree Certificate</h2>
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default AcademicCredentials;
