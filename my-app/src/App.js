import "./App.css";

const user ={
  name: "Jessica Fraser",
  bio: "I am a senior at the University of South Florida, after transfering from Hillsborough Community College with an AA. I am an applied math major with a concentration in data analytics and business intelligence. I am also getting a BAIS certificate as my minor.",
  contact: "jfraser4@usf.edu"
}

export default function Profile() {
  return(
    <>
    <h1>{user.name}</h1>
    <h3>Biography:</h3>
    <p>{user.bio}</p>
    <h3>Email:</h3>
    <p>{user.contact}</p>
    </>
  )
}