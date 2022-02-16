import './App.css';
import { Sidebar } from './modules/sidebar';
import { Routes, Route } from 'react-router-dom';
import { ContactMe, Portfolio, Home, SkillsAndOffer } from './modules';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="site-main">
        <Routes>
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/contact-me" element={ <ContactMe /> } />
          <Route path="/skills-and-offer" element={ <SkillsAndOffer /> } />
          <Route path="/" element={ <Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
