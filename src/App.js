import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg">
      <h1>Mandhipati Sasireeth Reddy</h1>
      <hr />
      <h2>Web Developer</h2>
      <hr />
      <div className="info">
        <div className="info1">
          <div className="contact">
            <h3>CONTACT</h3>
            <i className="fa-solid fa-envelope"></i><a href="mailto:sasireethreddy@gmail.com">sasireethreddy@gmail.com</a><br/>
            <i class="fa-brands fa-github"></i><a href="https://github.com/sasireeth">gh-sasireeth</a><br/>
            <i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/sasi321/">linkedin-Sasireeth Reddy</a>
          </div>
          <div className='skills'>
            <h3>SKILLS</h3>
            <p>HTML,CSS,GitHub, VS Code...</p>
          </div>
          <div className='edu'>
            <h3>EDUCATION</h3>
            <p><span>B.E CSE</span><br/>RNSIT<br/>2021-2025</p>
          </div>
        </div>
        <div className='vertical-line'></div>
        <div className="info2">
          <div className='about'>
            <h3>ABOUT</h3>
            <p className='my'>I am a passionate web developer with a strong background in problem-solving. My expertise lies in creating dynamic and responsive web applications that provide a seamless user experience. I am eager to apply my skills and knowledge to a role in a web development company, where I can contribute to innovative projects and continue to grow as a developer.</p>
          </div>
          <div className='projects'>
            
            <h3>PROJECTS</h3>
            <ul>
            <li>CRUD APPLIACTION</li>
            <li>PORTFOLIO WEBSITE</li>
            <li>SWIGGY CLONE</li>
            </ul>
            
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
