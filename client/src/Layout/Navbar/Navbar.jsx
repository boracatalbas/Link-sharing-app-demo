import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo-devlinks-large.svg";
import link from "../../assets/images/icon-links-header.svg";
import profile from "../../assets/images/icon-profile-details-header.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="mid-buttons">
        <Link to="/">
          <button
            className={selectedButton === "links" ? "selected" : ""}
            onClick={() => handleButtonClick("links")}
          >
            <img src={link} alt="links" />
            Links
          </button>{" "}
        </Link>
        <Link to="/profile">
          <button
            className={selectedButton === "profile" ? "selected" : ""}
            onClick={() => handleButtonClick("profile")}
          >
            <img src={profile} alt="profile" />
            Profile Details
          </button>
        </Link>
      </div>
      <button className="preview">Preview</button>
    </nav>
  );
}
