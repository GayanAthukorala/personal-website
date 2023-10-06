import logo from "./logo.svg";
import gayanPhoto from "./images/DarkerPic.png";
import McMaster from "./images/McMaster Logo.jpg";
import Soti from "./images/Soti Logo.jpg";
import Rocketry from "./images/McMaster Rocketry Logo.jpg";
import TechM from "./images/Tech Mahindra Logo.jpg";
import JS from "./images/JavaScript Logo.png";
import Python from "./images/Python Logo.png";
import ReactLogo from "./images/React Logo.png";
import HtmlLogo from "./images/HTML Logo.png";
import JavaLogo from "./images/Java Logo.png";
import SQLLogo from "./images/SQL Logo.png";
import NodeLogo from "./images/NodeLogo.png";
import CSSLogo from "./images/CSS Logo.png";
import GmailLogo from "./images/Gmail Logo.png";
import LinkedInLogo from "./images/LinkedIn Logo.png";
import CoffeeLogo from "./images/Zoom Logo.png";
import TeamsLogo from "./images/Teams Logo.png";
import GitHubLogo from "./images/GitHub Logo.png";
import GitHubIcon from "./images/GitHub Icon.png";
import LinkedInIcon from "./images/Linkedin Icon.png";
import OntarioHealth from "./images/Ontario Health Logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="nav">
        <div className="intro">
          Hi<span className="name">!</span> &nbsp; My Name is Gayan Athukorala
          <span className="name">.</span>
        </div>
        <div className="menu-links">
          <img className="linkedin-icon" src={LinkedInIcon} />
          <img className="github-icon" src={GitHubIcon} />
        </div>
      </div>
      <div className="menu">
        <div className="menu-items-wrapper">
          <div id="menu-items">
            {/* <div id="bar" /> */}
            <div className="row">
              <a href="#about" className="menu-item">
                ABOUT
              </a>
              <img className="mcmaster-logo" src={McMaster} />
              <img className="techm-logo" src={TechM} />
              <img className="soti-logo" src={OntarioHealth} />
              <img className="rocketry-logo" src={Rocketry} />
              <div className="bar-wrapper">
                <div className="bar-peg" />
              </div>
            </div>
            <div className="swapY">
              {/* <div> */}
              <div className="row">
                <span className="swapY">
                  <a href="#contact" className="menu-item-2">
                    CONTACT
                  </a>
                </span>

                <img className="gmail-logo" src={GmailLogo} />
                <img className="teams-logo" src={TeamsLogo} />
                <img className="coffee-logo" src={CoffeeLogo} />
                <img className="linkedin-logo" src={LinkedInLogo} />

                <div className="bar-wrapper">
                  <div className="bar-peg" />
                </div>
              </div>

              <div className="row">
                <span className="swapY">
                  <a href="#projects" className="menu-item-2">
                    PROJECTS
                  </a>
                </span>

                <img className="js-logo" src={JS} />
                <img className="python-logo" src={Python} />
                <img className="react-logo" src={ReactLogo} />
                <img className="html-logo" src={HtmlLogo} />
                <img className="node-logo" src={NodeLogo} />
                <img className="sql-logo" src={SQLLogo} />
                <img className="java-logo" src={JavaLogo} />
                <img className="css-logo" src={CSSLogo} />

                <div className="bar-wrapper">
                  <div className="bar-peg" />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="pictures-wrapper">
          <div className="profile-background">
            <div className="image-cropper">
              <img src={gayanPhoto} style={{ height: 350, width: 350 }} />
            </div>
          </div>
        </div>
      </div>
      <span className="lower-menu">
        <div className="menu-button-wrapper">
          <button className="menu-button">Resume</button>
          <button className="menu-button">GitHub</button>
        </div>
        <div className="blurb-wrapper">
          <div className="blurb">
            Software Engineering&nbsp; <span className="name">@</span> McMaster
          </div>
        </div>
      </span>
      <div id="about">
        <div className="about-title">
          ABOUT
          <span className="name">.</span>
        </div>
        <div className="about-info">
          <div className="about-paragraph">
            I'm a 3rd year software engineering student at McMaster University.
            I've always loved coming up with unique solutions to problems I
            faced in my life, and technology & software allow me to turn my
            ideas into a reality.
          </div>
          <div className="about-paragraph">
            Currently, I'm working in AI and Cloud at Ontario Health, but I have
            experience in QA and development through previous internships, my
            education, and projects. Outside of work I love spending time with
            my friends, playing volleyball, and going skiing!{" "}
          </div>
          <div className="about-toggle">
            <button className="previous"> Previous </button>
            <button className="current"> Current </button>
          </div>
          <div className="about-experience-wrapper">
            <div className="about-experience">
              <div className="about-experience-image-frame">
                <img className="about-experience-image" src={OntarioHealth} />
              </div>
              <div className="about-experience-title-frame">
                <div className="about-experience-title">Ontario Health</div>
                <div className="about-experience-role">
                  <span className="name">[</span> Software Developer Intern{" "}
                  <span className="name">]</span>
                </div>
              </div>
            </div>
            <div className="about-experience">
              <div className="about-experience-image-frame">
                <img className="about-experience-image" src={TechM} />
              </div>
              <div className="about-experience-title-frame">
                <div className="about-experience-title">Tech Mahindra</div>
                <div className="about-experience-role">
                  <span className="name">[</span> Jr. Software Engineer{" "}
                  <span className="name">]</span>
                </div>
              </div>
            </div>
            {/* <div className="about-experience">
              <div className="about-experience-image-frame">
                <img className="about-experience-image" src={Rocketry} />
              </div>
              <div className="about-experience-title-frame">
                <div className="about-experience-title">
                  McMaster Rocketry Team
                </div>
                <div className="about-experience-role">
                  <span className="name">[</span> Payload Subteam{" "}
                  <span className="name">]</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div id="projects">
        <div className="about-title">
          PROJECTS<span className="name">.</span>
        </div>
        <div className="projects-background"></div>
      </div>
      <div id="contact">
        <div className="about-title">
          CONTACT<span className="name">.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
