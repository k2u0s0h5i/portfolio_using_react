import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Education from './Education.jsx'; 
import Internship from './Internship.jsx';  
import Achievements from './Achievements.jsx';  

import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
