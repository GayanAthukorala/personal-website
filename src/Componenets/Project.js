import React, {
  Component,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";

import "../App.css";

function Project(props) {
  const { picture, description, name, link } = props;
  const [popUp, setPopUp] = useState(false);

  const popUpOn = (event) => {
    setPopUp(true);
    document.body.style.overflow = "hidden";
  };

  const openLink = () => {
    window.open({ link }, "_blank");
  };

  return (
    <div className="projects-background-grid-item">
      {/* <div className="projects-item-info"></div> */}
      <a href={link} target="_blank" className="projects-button-wrapper">
        <button className="projects-item">
          <div className="projects-item-picture-background">
            <img className="projects-item-picture" src={picture} />
          </div>
          <div className="projects-item-title">{name}</div>
          <div className="projects-item-details-wrapper">
            <div className="projects-item-bracket">[</div>
            <div className="projects-item-description">{description}</div>
            <div className="projects-item-bracket">]</div>
          </div>
        </button>
      </a>

      {/* {popUp == true ? <PopUpCard /> : <div />} */}
    </div>
  );
}

function PopUpCard({ popUp, setPopUp }) {
  return (
    <div className="modal">
      HELOOOOO
      <button onClick={setPopUp(false)}>exit</button>
    </div>
  );
}

export default Project;
