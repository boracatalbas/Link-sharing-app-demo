import "./Navbar.scss";
import logo from "../../assets/images/logo-devlinks-large.svg";
import link from "../../assets/images/icon-links-header.svg";
import profile from "../../assets/images/icon-profile-details-header.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="mid-buttons">
        <button>
          <img src={link} />
          Links
        </button>

        <button>
          <img src={profile} alt="profile" />
          Profile Details
        </button>
      </div>
      <button className="preview">Preview</button>
    </nav>
  );
}
