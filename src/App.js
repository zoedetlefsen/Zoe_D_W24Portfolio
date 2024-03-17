import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AcademicCredentials from './components/AcademicCredentials';
import AcademicWorkExperience from './components/AcademicWorkExperience';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Header from './components/Header';
import Contact from './components/Contact';
import Capstone from './components/Capstone';
import ProfessionalSummary from './components/ProfesionalSummary';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/academiccredentials" element={<AcademicCredentials />} />
          <Route path="/academicworkexperience" element={<AcademicWorkExperience />} />
          <Route path='/resources/resume' element={<Resume />} />
          <Route path='/resources/cover-letter' element={<CoverLetter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/professionalsummary" element={<ProfessionalSummary />} />
          <Route path="/capstone" element={<Capstone />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
