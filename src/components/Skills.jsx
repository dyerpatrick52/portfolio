const skillGroups = [
  {
    category: "Languages",
    icon: "bi-braces",
    skills: ["Python", "Java", "TypeScript", "HTML & CSS", "SQL"],
  },
  {
    category: "Frameworks",
    icon: "bi-layers",
    skills: ["React", "Flask", "Spring Boot", "JUnit"],
  },
  {
    category: "Tools",
    icon: "bi-tools",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Docker", "Vite", "npm", "PostgreSQL", "Power BI", "Power Apps"],
  },
];

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I've used across academic projects and personal
        work.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-category">
            <i className={`bi ${group.icon}`}></i>
            <h5>{group.category}</h5>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
