import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AcademicWorkExperience.css'

const AcademicWorkExperience = () => {
    return (
        <div className="academic-work">
            <h1>Academic Work Experience</h1>
            <div className="buttons">
                <Link to="/capstone" className="button-link">
                    <button>Capstone Project EcoTrack - Click to View Page</button>
                </Link>
                <a href={`${process.env.PUBLIC_URL}/Assignment1_COMP3134.zip`} className="button-link" download>
                    <button>Cyber Security Assignment 1 - Click to Download</button>
                </a>
                <a href={`${process.env.PUBLIC_URL}/Assignment2_COMP3134.zip`} className="button-link" download>
                    <button>Cyber Security Assignment 2 - Click to Download</button>
                </a>
                <a href={`${process.env.PUBLIC_URL}/Assignment1_Comp3133.zip`} className="button-link" download>
                    <button>COMP3133 Assignment 1 - Click to Download</button>
                </a>
                <a href={`${process.env.PUBLIC_URL}/GBC_SpringSocial_Group11.zip`} className="button-link" download>
                    <button>GBC Spring Social - Springboot - Click to Download</button>
                </a>
            </div>

            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nQqDhmNmCkY"
                    title="Machine Learning Assignment 2"
                    frameborder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div className='video-container'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/92Nrpp0U2uI"
                    title="Machine Learning Assignment 1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

        </div>
    );
};

export default AcademicWorkExperience;
