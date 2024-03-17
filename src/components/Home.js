import { Link } from 'react-router-dom';
import '../assets/styles/Home.css'; 
function Home() {
    return (
      <div className="home-container">
        <div className="section bio">
          <h2>Bio</h2>
          <p>
              Zoe Detlefsen is an aspiring cybersecurity and IT professional currently advancing their expertise through a Diploma in Computer 
              Programming and Analysis at George Brown College, with an anticipated graduation in 2024. Alongside this, Zoe Detlefsen is pursuing
              a Google Cybersecurity Professional Certificate to deepen their understanding and skills in the ever-evolving field of cybersecurity.
          </p>
          <p>
              With a foundation in programming languages such as Python, Java, and C#, Zoe Detlefsen has a keen interest in developing secure, 
              innovative solutions that address modern technological challenges. Their technical proficiency extends to software tools and 
              environments, including Docker, Jenkins, and various cloud computing platforms. Zoe Detlefsen is also adept in project management
              methodologies and practices, which complements their technical skillset and supports their collaborative approach to IT projects.
          </p>
          <p>
              Zoe Detlefsen's journey in the IT sector is underpinned by a strong belief in continuous learning and improvement, driven by a passion 
              for technology and its potential to transform lives and industries. Their previous experiences range from customer service roles, 
              demonstrating exceptional communication and problem-solving skills, to technical positions where they applied their IT knowledge 
              practically, such as managing and coordinating technical teams and projects.
          </p>
          <p>
              Outside the professional realm, Zoe Detlefsen engages actively in cybersecurity communities, participating in Capture The Flag (CTF) 
              challenges to sharpen their skills in network security, cryptography, and penetration testing. This involvement not only highlights 
              their commitment to staying abreast of industry trends and threats but also reflects their dedication to personal and community growth 
              within the cybersecurity space.
          </p>
        </div>
        
        <div className="section philosophy">
          <h2>Philosophy/Statement of Career Goal</h2>
          <p>
              My career philosophy centers on the belief that we hold the keys to our own professional and personal evolution. 
              In the realm of IT and cybersecurity, I view myself as more than a practitioner; 
              I am a continuous learner and an agent of change. This belief is shaped by my experiences, 
              where each challenge faced and solution found has underscored the transformative power of technology. 
              It is this transformative power that motivates me, driving me to not only adapt to the rapidly changing tech landscape 
              but also to contribute meaningfully to it.
          </p>
          <p>
              Currently, as I delve deeper into my studies and professional development, I see my role as bridging the gap between 
              intricate technological frameworks and their real-world applications. My future ambitions are clear: to advance 
              within the cybersecurity field, influencing safer digital environments through innovation and ethical practice. 
              I am committed to evolving alongside technology, ensuring that my contributions positively impact both the industry 
              and society at large, guided by a relentless pursuit of knowledge and a commitment to excellence.
          </p>
        </div>

        <div className="buttons">
          <Link to="/resources/resume" className="button-link">
            <button>Resume</button>
          </Link>
          <Link to="/resources/cover-letter" className="button-link">
            <button>Cover Letter</button>
          </Link>
        </div>
      </div>
    );
}

export default Home;
