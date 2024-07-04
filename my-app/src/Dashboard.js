import SkillList from './SkillList.js'

// Make Dashboard function.
export default function Dashboard({skills}){
    return (
        <div
        className="dashboard">
            {skills.map(skill => (
                <SkillList
                key={skill.id}
                skill={skill.skill}
                proficiency={skill.proficiency}
                />
            ))}
        </div>
    )
}