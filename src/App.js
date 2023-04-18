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
import CoffeeLogo from "./images/Coffee Logo.png";
import TeamsLogo from "./images/Teams Logo.png";
import GitHubLogo from "./images/GitHub Logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="nav" />
      <div className="menu">
        <div id="menu-items">
          {/* <div id="bar" /> */}
          <div className="row">
            <a href="#about" className="menu-item">
              ABOUT
            </a>
            <img className="mcmaster-logo" src={McMaster} />
            <img className="techm-logo" src={TechM} />
            <img className="soti-logo" src={Soti} />
            <img className="rocketry-logo" src={Rocketry} />
            <div className="bar-wrapper">
              <div className="bar-peg" />
            </div>
          </div>
          <div className="swapY">
            {/* <div> */}
            <div className="row">
              <span className="swapY">
                <a href="#about" className="menu-item-2">
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
                <a href="#about" className="menu-item-2">
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
        <div className="pictures-wrapper">
          <div className="profile-background">
            <div className="image-cropper">
              <img src={gayanPhoto} style={{ height: 350, width: 350 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="resume-button-wrapper">
        <button className="menu-button">Resume</button>
        <button className="menu-button">GitHub</button>
      </div>
      <div id="about">
        <div>WHO AM I?</div>
      </div>
      <div id="projects">
        <div>MY WORK</div>
      </div>
      <div id="contact">
        <div>LETS GET IN TOUCH </div>
      </div>
    </div>
  );
}

export default App;
