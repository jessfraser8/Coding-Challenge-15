// Make SkillList function.
export default function SkillList({skill, proficiency}) {
    return (
        <div className="skill-list">
            <p>{skill} - {proficiency}</p>
        </div>
    )
}