import './Header.scss'
import Greeting from './Greeting/Greeting';

function Header() {
  return (
    <header className="header">
      <Greeting />
      <nav>
        <a href="#about">About</a>
        <a href="https://kenrotaris.dev/projects">Projects</a>
        <a href="mailto:info@kenrotaris.dev">Contact</a>
      </nav>
    </header>
  );
}

export default Header;