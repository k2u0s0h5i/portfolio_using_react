import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Education from './Education.jsx';   // ✅ Add this
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
