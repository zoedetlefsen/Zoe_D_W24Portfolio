function Resume() {
    return (
      <div>
        <h1>My Resume</h1>
        <object 
          data={`${process.env.PUBLIC_URL}/zoedetlefsen_Resume.pdf`} 
          type="application/pdf" 
          width="100%" 
          height="1000px">
          <iframe 
            src={`${process.env.PUBLIC_URL}/zoedetlefsen_Resume.pdf`}
            width="100%" 
          height="10000px" style={{ border: 'none' }}>
              <p>This browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/your_resume_filename.pdf`}>Download PDF</a>.</p>
          </iframe>
        </object>
      </div>
    );
  }
  
  export default Resume;
  