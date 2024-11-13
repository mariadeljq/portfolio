import '../styles/Home.css';
import profileImagePNG from '../assets/profilepng.png'
import iconOriginal from '../assets/linkedinOriginal.svg';
import iconHover from '../assets/linkedinHover.svg';
import { useState } from 'react';

function Home() {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div id="home">
      <div id="img">
        <img src={profileImagePNG} width="400px auto" alt="profile" />
      </div>
      <div id="info">
        <p className='subtitle2'>Welcome to my web!</p><br />
        <p className='title'>I am <span className='mainColour'>María del Mar<br />Juan Quintanilla</span></p>
        <p className='subtitle'>Software Developer</p>
        <div className='buttons'>
          <button onClick={() => console.log("Contact me")}>Contact me</button>
          <a href="https://www.linkedin.com/in/mariadelmar-jq/">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img src={isHovering ? iconHover : iconOriginal} width="15px" alt="Icono" />
            </button>
          </a>

        </div>

      </div>
    </div>
  )
}

export default Home