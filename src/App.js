import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="menu">
        <a href="#about" className="menu-item">
          ABOUT
        </a>
        <a href="#projects" className="menu-item">
          PROJECTS
        </a>
        <a href="#contact" className="menu-item">
          CONTACT
        </a>
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
