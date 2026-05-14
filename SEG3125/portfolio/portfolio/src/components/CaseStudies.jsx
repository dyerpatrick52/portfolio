const studies = [
  {
    title: "Service Site",
    desc: "A service-oriented website designed for clear information hierarchy and ease of navigation.",
    tags: ["UX Design", "HTML", "CSS"],
  },
  {
    title: "Memory Game",
    desc: "An interactive memory card game focused on responsive layout and smooth animations.",
    tags: ["React", "CSS Animations", "Game Design"],
  },
  {
    title: "E-commerce Site",
    desc: "A product browsing and checkout experience built around user trust and conversion.",
    tags: ["UX Research", "React", "Figma"],
  },
  {
    title: "Analytics Site",
    desc: "A data dashboard interface designed for readability and effective data visualization.",
    tags: ["Data Viz", "React", "Dashboard"],
  },
];

function CaseStudies() {
  return (
    <div id="case-studies" className="case-studies-container">
      <h2 className="case-studies-title">Case Studies</h2>
      <div className="case-studies-grid">
        {studies.map((study) => (
          <div key={study.title} className="case-study-card">
            <div className="case-study-content">
              <span className="coming-soon-badge">Coming Soon</span>
              <h5 className="case-study-card-title">{study.title}</h5>
              <p className="case-study-card-desc">{study.desc}</p>
              <div className="case-study-tags">
                {study.tags.map((tag) => (
                  <span key={tag} className="case-study-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
