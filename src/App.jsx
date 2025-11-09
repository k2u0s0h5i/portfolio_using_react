import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Education from './Education.jsx'; 
import Internship from './Internship.jsx';  

import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/internship" element={<Internship />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
