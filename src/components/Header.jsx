function Header() {
  return (
    <div className="title-info-container">
      <div className="name-img">
        <img className="me" src="/me.jpg" alt="Patrick Dyer" />
        <div className="name-text">
          <h1 className="name">Patrick<br />Dyer</h1>
          <p className="name-subtitle">
            Software Engineering Student @ uOttawa ·<br /> Previously @ Transportation Safety Board of Canada
          </p>
        </div>
      </div>
      <hr className="header-divider" />
      <div className="header-actions">
        <a className="linkedin-link" href="https://www.linkedin.com/in/patrick-rk-dyer/">
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
        <a className="github-link" href="https://github.com/dyerpatrick52">
          <i className="bi bi-github"></i> GitHub
        </a>
        <a className="resume-link" href="/resume.pdf" download>
          <i className="bi bi-download"></i> Download Resume
        </a>
      </div>
    </div>
  );
}

export default Header;
