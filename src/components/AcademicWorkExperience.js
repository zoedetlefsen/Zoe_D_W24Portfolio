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
        </div>
    );
};

export default AcademicWorkExperience;
