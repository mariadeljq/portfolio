import { useState } from 'react';
import '../styles/NavBar.css';

function handleNavigation(section, setActiveSection) {
  console.log(`Navigating to ${section}`);
  setActiveSection(section);
}

function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const sections = ['Home', 'About', 'Experience', 'Skills', 'Portfolio', 'Contact'];

  return (
    <>
      <div id="navBar">
        {sections.map((section) => (
          <p
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => handleNavigation(section, setActiveSection)}
          >
            {section}
          </p>
        ))}
      </div>
    </>
  )
}

export default NavBar