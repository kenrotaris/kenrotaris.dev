import './Header.scss'
import Greeting from './Greeting/Greeting';

function Header() {
  return (
    <header className="header">
      <Greeting></Greeting>
      <a className="button" href="mailto:info@kenrotaris.dev">Get in Touch</a>
    </header>
  );
}

export default Header;