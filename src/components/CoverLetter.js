import React from 'react'
import img from '../assets/coverletter.png'

function CoverLetter() {

    const centerStyle = {
        textAlign: 'center', 
        margin: '0 auto', 
    };

    return (
      <div style={{ ...centerStyle }}>
        <h1 style={{ ...centerStyle }}>My Cover Letter</h1>
        <img src={img} alt="My cover letter" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
      </div>
    );
  }
  
  export default CoverLetter;
  