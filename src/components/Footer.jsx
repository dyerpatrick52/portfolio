function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-heading">Get in Touch</h2>
        <p className="footer-sub">
          I'm open to internships, CO-OP opportunities, and collaborations.
        </p>
        <a className="footer-email" href="mailto:dyerpatrick52@gmail.com">
          dyerpatrick52@gmail.com
        </a>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/patrick-rk-dyer/">LinkedIn</a>
          <a href="https://github.com/dyerpatrick52">GitHub</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Patrick Dyer</p>
      </div>
    </footer>
  );
}

export default Footer;
