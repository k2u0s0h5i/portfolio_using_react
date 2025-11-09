import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header>
      <h1><Link to ='/'>Kushala</Link></h1>
      <nav>
        <ul>
         <li> <Link to ='/education'>Education</Link></li>
          <li> <Link to ='/internship'>Internship</Link></li> 
          <li> <Link to ='/achievements'>Achievements</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
