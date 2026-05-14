function HowIWork() {
  return (
    <div id="how-i-work" className="how-i-work-container">
      <h2 className="how-i-work-title">How I Work</h2>
      <p className="how-i-work-subtitle">
        I approach design and development as two sides of the same coin — good
        interfaces start with intentional design and are brought to life through
        clean code.
      </p>
      <div className="design-steps-grid">
        <div className="design-1">
          <i className="bi bi-columns"></i>
          <h5>Design first</h5>
          <p>
            I prototype and validate ideas visually before writing a line of
            code.
          </p>
        </div>
        <div className="design-2">
          <i className="bi bi-person-check"></i>
          <h5>User-centered</h5>
          <p>
            Decisions are grounded in how real people interact with interfaces,
            not assumptions.
          </p>
        </div>
        <div className="design-3">
          <i className="bi bi-code-slash"></i>
          <h5>Build it clean</h5>
          <p>
            I write code that's readable and maintainable, not just functional.
          </p>
        </div>
      </div>
      <div className="current-grid">
        <div>
          <h3 className="current-title">CURRENTLY STUDYING</h3>
          <h4 className="current-subtitle">
            Analysis and Design of User Interfaces (SEG3125)
          </h4>
          <p className="current-desc">
            Actively deepening my understanding of interaction design, usability
            principles, and how to build interfaces people actually enjoy using.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowIWork;
