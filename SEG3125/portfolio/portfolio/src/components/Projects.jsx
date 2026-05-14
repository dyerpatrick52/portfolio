const projects = [
  {
    title: "UOScheduler",
    desc: "Scheduler Generation/Planner for uOttawa Students",
    tags: ["TypeScript", "React", "Algorithms"],
    url: "https://uoscheduler.ca/",
  },
];

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        Here is a list of all my past or present projects that I have worked on.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <a href={project.url} className="project-card-url">
              <div className="project-card-content">
                <h5 className="project-card-title">{project.title}</h5>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
