import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Ken Rotaris</p>
        <nav>
          <a href="https://www.linkedin.com/in/kenrotaris/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:info@kenrotaris.dev">Email</a>
          <a href="https://github.com/kenrotaris" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;