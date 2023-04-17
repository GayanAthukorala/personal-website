import logo from "./logo.svg";
import gayanPhoto from "./images/Gayan.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="menu">
        <div className="contents-bar">
          <div id="bar" />
        </div>
        <div id="menu-items">
          <div className="row">
            <a href="#about" className="menu-item">
              ABOUT
            </a>
            <div className="bar-peg" />
          </div>

          <div className="row">
            <a href="#projects" className="menu-item">
              PROJECTS
            </a>
            <div className="bar-peg" />
          </div>
          <div className="row">
            <a href="#contact" className="menu-item">
              CONTACT
            </a>
            <div className="bar-peg" />
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
