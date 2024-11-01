import logo from "./logo.svg";
import gayanPhoto from "./images/DarkerPic.png";
import McMaster from "./images/McMasterLogo.png";
import IBM from "./images/IBM Logo.webp";
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
import Scotiabank from "./images/ScotiabankLogo.png";
import DeltaHacks from "./images/squareDeltahacks.png";
import Resume from "./Gayan Athukorala Resume.pdf";
import LocalLove from "./images/LocalLove.png";
import ZeroFoodWaste from "./images/ZeroFoodWaste.png";
import Verses from "./images/VersesNew.png";
import IslandGen from "./images/sample.svg";
import "./App.css";
import "./About.css";
import "./Projects.css";
import React, { useEffect, useState, useRef, useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Project from "./Componenets/Project";
import Experience from "./Componenets/Experience";

function App() {
  const [LocalLovePop, setLovalLovePop] = useState(false);
  const [coopButtonClicked, setCoopButton] = useState(false);
  const [clubButtonClicked, setClubButton] = useState(false);

  const ScotiabankExperience = document.getElementById("Scotiabank");
  const OntarioHealthExperience = document.getElementById("OntarioHealth");
  const DeltaHacksExperience = document.getElementById("DeltaHacks");
  const TechMahindraExperience = document.getElementById("TechMahindra");
  const RocketryExperience = document.getElementById("Rocketry");
  const allBtn = document.getElementById("allBtn");
  const clubBtn = document.getElementById("clubBtn");
  const coopBtn = document.getElementById("coopBtn");

  const allButtonClick = () => {
    const IBMExperience = document.getElementById("IBM")
    const ScotiabankExperience = document.getElementById("Scotiabank");
    const OntarioHealthExperience = document.getElementById("OntarioHealth");
    const DeltaHacksExperience = document.getElementById("DeltaHacks");
    const TechMahindraExperience = document.getElementById("TechMahindra");
    const RocketryExperience = document.getElementById("Rocketry");
    const allBtn = document.getElementById("allBtn");
    const clubBtn = document.getElementById("clubBtn");
    const coopBtn = document.getElementById("coopBtn");

    IBMExperience.style.display = "flex";

    ScotiabankExperience.style.display = "flex";

    TechMahindraExperience.style.display = "flex";

    OntarioHealthExperience.style.display = "flex";

    DeltaHacksExperience.style.display = "flex";

    RocketryExperience.style.display = "flex";

    allBtn.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
    allBtn.style.width = "17rem";
    allBtn.style.clipPath = "polygon(0 0, 94.5% 0, 100% 100%, 5.5% 100%)";
    clubBtn.style.width = "12rem";
    clubBtn.style.clipPath = "polygon(0 0, 92% 0, 100% 100%, 0 100%)";
    coopBtn.style.width = "12rem";
    coopBtn.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 8% 100%)";
    allBtn.style.backgroundColor = "#916FFF";
    coopBtn.style.backgroundColor = "#7848c4";
    clubBtn.style.backgroundColor = "#7848c4";
  };

  const clubButtonClick = () => {
    const IBMExperience = document.getElementById("IBM")
    const ScotiabankExperience = document.getElementById("Scotiabank");
    const OntarioHealthExperience = document.getElementById("OntarioHealth");
    const DeltaHacksExperience = document.getElementById("DeltaHacks");
    const TechMahindraExperience = document.getElementById("TechMahindra");
    const RocketryExperience = document.getElementById("Rocketry");
    const allBtn = document.getElementById("allBtn");
    const clubBtn = document.getElementById("clubBtn");
    const coopBtn = document.getElementById("coopBtn");
    // setExperienceToggle(0);

    IBMExperience.style.display = "none";

    ScotiabankExperience.style.display = "none";

    TechMahindraExperience.style.display = "none";

    OntarioHealthExperience.style.display = "none";

    DeltaHacksExperience.style.display = "flex";

    RocketryExperience.style.display = "flex";

    allBtn.style.width = "12rem";
    allBtn.style.clipPath = "polygon(0 0, 92% 0, 100% 100%, 8% 100%)";
    clubBtn.style.width = "17rem";
    clubBtn.style.clipPath = "polygon(0 0, 94.5% 0, 100% 100%, 0 100%)";
    coopBtn.style.width = "12rem";
    coopBtn.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 8% 100%)";
    allBtn.style.backgroundColor = "#7848c4";
    coopBtn.style.backgroundColor = "#7848c4";
    clubBtn.style.backgroundColor = "#916FFF";
  };

  const coopButtonClick = () => {
    const IBMExperience = document.getElementById("IBM")
    const ScotiabankExperience = document.getElementById("Scotiabank");
    const OntarioHealthExperience = document.getElementById("OntarioHealth");
    const DeltaHacksExperience = document.getElementById("DeltaHacks");
    const TechMahindraExperience = document.getElementById("TechMahindra");
    const RocketryExperience = document.getElementById("Rocketry");
    const allBtn = document.getElementById("allBtn");
    const clubBtn = document.getElementById("clubBtn");
    const coopBtn = document.getElementById("coopBtn");
    // setExperienceToggle(2);
    ScotiabankExperience.style.display = "flex";

    TechMahindraExperience.style.display = "flex";

    OntarioHealthExperience.style.display = "flex";

    IBMExperience.style.display = "flex";

    DeltaHacksExperience.style.display = "none";

    RocketryExperience.style.display = "none";

    allBtn.style.width = "12rem";
    allBtn.style.clipPath = "polygon(0 0, 92% 0, 100% 100%, 8% 100%)";
    clubBtn.style.width = "12rem";
    clubBtn.style.clipPath = "polygon(0 0, 92% 0, 100% 100%, 0 100%)";
    coopBtn.style.width = "17rem";
    coopBtn.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 5.5% 100%)";
    allBtn.style.backgroundColor = "#7848c4";
    coopBtn.style.backgroundColor = "#916FFF";
    clubBtn.style.backgroundColor = "#7848c4";
  };

  return (
    <div className="overlay">
      <div className="nav">
        <div className="intro">
          Hi<span className="name">!</span> &nbsp; My Name is Gayan Athukorala
          <span className="name">.</span>
        </div>
        <div className="menu-links">
          <a
            href="https://www.linkedin.com/in/gayanathukorala/"
            target="_blank"
          >
            <img className="linkedin-icon" src={LinkedInIcon} />
          </a>
          <a href="https://github.com/GayanAthukorala " target="_blank">
            <img className="github-icon" src={GitHubIcon} />
          </a>
        </div>
      </div>
      <div className="menu">
        <div className="menu-items-wrapper">
          <div id="menu-items">
            {/* <div id="bar" /> */}
            <div className="row">
              <a href="#about" className="menu-item">
                ABOUT
                <img className="company1-logo" src={McMaster} />
                <img className="company2-logo" src={DeltaHacks} />
                <img className="company3-logo" src={Scotiabank} />
                <img className="company4-logo" src={IBM} />
              </a>

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
                    <img className="gmail-logo" src={GmailLogo} />
                    <img className="teams-logo" src={TeamsLogo} />
                    <img className="coffee-logo" src={CoffeeLogo} />
                    <img className="linkedin-logo" src={LinkedInLogo} />
                  </a>
                </span>

                <div className="bar-wrapper">
                  <div className="bar-peg" />
                </div>
              </div>

              <div className="row">
                <span className="swapY">
                  <a href="#projects" className="menu-item-2">
                    PROJECTS
                    <img className="js-logo" src={JS} />
                    <img className="python-logo" src={Python} />
                    <img className="react-logo" src={ReactLogo} />
                    <img className="html-logo" src={HtmlLogo} />
                    <img className="node-logo" src={NodeLogo} />
                    <img className="sql-logo" src={SQLLogo} />
                    <img className="java-logo" src={JavaLogo} />
                    <img className="css-logo" src={CSSLogo} />
                  </a>
                </span>

                <div className="bar-wrapper">
                  <div className="bar-peg" />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="pictures-wrapper">
          {/* <div className="image-cropper"> */}
          <img src={gayanPhoto} class="image-cropper" />
          {/* </div> */}
          {/* <div className="blurb-wrapper"> */}
          {/* <div className="blurb">
              Software Engineering&nbsp; <span className="name">@</span>{" "}
              McMaster
            </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <span className="lower-menu">
        <div className="menu-button-wrapper">
          <a href={Resume} type="application/pdf" target="_blank">
            <button className="menu-button">Resume</button>
          </a>
          <button
            className="menu-button"
            onClick={() =>
              window.open("https://github.com/GayanAthukorala", "_blank")
            }
          >
            GitHub
          </button>
        </div>
        <div className="blurb-wrapper">
          <div className="blurb">
            Software Engineering&nbsp; <span className="name">@</span> McMaster
          </div>
        </div>
      </span> */}
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
            Currently, I'm working as a Software Developer Intern at IBM, but I have
            experience in Cloud, AI, and Full-Stack Development through previous
            internships, my education, and projects. Outside of work I love
            spending time with my friends, playing volleyball, and going skiing!{" "}
          </div>
          <div className="about-toggle">
            <button className="club-btn" id="clubBtn" onClick={clubButtonClick}>
              {" "}
              Leadership Experience{" "}
            </button>
            <button className="all-btn" id="allBtn" onClick={allButtonClick}>
              {" "}
              All Experience
            </button>
            <button className="coop-btn" id="coopBtn" onClick={coopButtonClick}>
              {" "}
              Work Experience{" "}
            </button>
          </div>
          <div className="about-experience-wrapper">
            <Experience
                id="IBM"
                picture={IBM}
                company="IBM"
                role="Software Developer Intern "
            />
            <Experience
              id="Scotiabank"
              picture={Scotiabank}
              company="Scotiabank"
              role="Software Engineer
                    Intern "
            />

            <Experience
              id="OntarioHealth"
              picture={OntarioHealth}
              company="Ontario Health"
              role="Software Developer Intern "
            />
            <Experience
              id="DeltaHacks"
              picture={DeltaHacks}
              company="DeltaHacks"
              role="VP Sponsorship "
            />

            <Experience
              id="TechMahindra"
              picture={TechM}
              company="Tech Mahindra"
              role="Jr. Software Engineer "
            />

            <Experience
              id="Rocketry"
              picture={Rocketry}
              company="McMaster Rocketry Team"
              role="Payload Subteam "
            />
          </div>
        </div>
      </div>
      <div id="projects">
        <div className="about-title">
          PROJECTS<span className="name">.</span>
        </div>
        <div className="projects-info">
          <div className="projects-background">
            <Project
              link="https://github.com/GayanAthukorala/LocalLove-DeltaHacks9"
              name="Local Love"
              picture={LocalLove}
              description="Find Local Businesses in your Area"
            />
            <Project
              link="https://github.com/GayanAthukorala/ZeroFoodWaste"
              name="ZeroFoodWaste"
              picture={ZeroFoodWaste}
              description="Learn Recipes with Personalized Ingredient Amounts to
                    Eliminate Food Wastage"
            />
            <Project
              link="https://github.com/GayanAthukorala/Verses-Hack-Western-9"
              name="Verses"
              picture={Verses}
              description="A music quiz app for you to test yourself and your friends
                    on your music taste"
            />

            <Project
              link="https://github.com/GayanAthukorala/Island-Generator"
              name="Island Generator"
              picture={IslandGen}
              description="Randomly generate islands with 15 customizable
                    features"
            />
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="about-title">
          CONTACT<span className="name">.</span>
        </div>
        <div className="contact-blurb">
          Lets connect<span className="name">,&nbsp;</span> I would love to have
          a coffee chat<span className="name">!</span>{" "}
        </div>
        <textarea className="contact-message"></textarea>

        <div className="contact-button-container">
          <button className="contact-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
