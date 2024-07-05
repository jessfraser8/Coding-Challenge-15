// U09226075

// Link to css.
import "./App.css";

// Link to React.
import React from 'react';

// Link to Dashboard for skills section.
import Dashboard from './Dashboard.js'

// Link to Experience for experience section.
import Experience from './Experience.js'

// Personal Information section. 
const user ={
  name: "Jessica Fraser",
  bio: "I am a senior at the University of South Florida, after transfering from Hillsborough Community College with an AA degree. I am an Applied Math major with a concentration in Data Analytics and Business Intelligence. I am also getting a Business Analytics and Information Systems certificate as my minor.",
  contact: "jfraser4@usf.edu"
}

// Create webpage.
export default function App() {
  return(
    <>
    {/* Personal information section. */}
    <h1>{user.name}</h1>
    <h3>Biography:</h3>
    <p>{user.bio}</p>
    <h3>Email:</h3>
    <p>{user.contact}</p>
    {/* Skill section. */}
    <h3>Skills:</h3>
    <div className="App">
      <Dashboard skills={skills}/>
    </div>
    {/* Experience section. */}
    <Experience/>
    {/* Education section. */}
    <h3>Education:</h3>
    <p><strong>Hillsborough High School</strong> - high school deploma - 2016-2020</p>
    <p><strong>Hillsborough Community College</strong> - Associate in Arts degree - 2021-2023</p>
    <p><strong>University of South Florida</strong> - 2024-ongoing</p>
    </>
  )
}

// Dynamically create skills.
const skills = [
  {
    id: 1,
    skill: "Microsoft Office",
    proficiency: "8"
  },
  {
    id: 2,
    skill: "Tableau",
    proficiency: "5"
  },
  {
    id: 3,
    skill: "Python",
    proficiency: "4"
  },
  {
    id: 4,
    skill: "JavaScript",
    proficiency: "6"
  },
  {
    id: 5,
    skill: "HTML",
    proficiency: "7"
  }
]
