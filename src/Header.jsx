import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Kushala</h1>
      <nav>
        <ul>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="#">Internship</Link></li>
          <li><Link to="#">Achievements</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
