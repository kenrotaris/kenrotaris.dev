import './Header.scss'
import Greeting from './Greeting/Greeting';

function Header() {
  return (
    <header className="header">
      <Greeting />
      <nav>
        <a href="https://docs.google.com/document/d/1VBj8NdGKL5xHQkESfxWHW6E-rZwVoWP9QrnUXFfTYXs/edit?usp=sharing">Resume</a>
        <a href="mailto:info@kenrotaris.dev">Contact</a>
      </nav>
    </header>
  );
}

export default Header;