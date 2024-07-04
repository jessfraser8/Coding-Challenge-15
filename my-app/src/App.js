// U#

// Link to css.
import "./App.css";

// Link to React.
import React from 'react';

// Link to Dashboard for skills section.
import Dashboard from './Dashboard.js'

// Personal Information section. 
const user ={
  name: "Jessica Fraser",
  bio: "I am a senior at the University of South Florida, after transfering from Hillsborough Community College with an AA. I am an applied math major with a concentration in data analytics and business intelligence. I am also getting a BAIS certificate as my minor.",
  contact: "jfraser4@usf.edu"
}

// Create webpage.
export default function Profile() {
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
    skill: "MHTML",
    proficiency: "7"
  }
]
