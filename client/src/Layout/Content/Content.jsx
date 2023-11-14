import "./Content.scss";
import phone from "../../assets/images/illustration-phone-mockup.svg";
import iconChevron from "../../assets/images/icon-chevron-down.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import github from "../../assets/images/icon-github.svg";
import twitch from "../../assets/images/icon-twitch.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import linkIcon from "../../assets/images/icon-links-header.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Content() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("Github");
  const [platforms, setPlatforms] = useState([]);
  const [links, setLink] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setLink(res.data.links))
      .catch((err) => console.log(err));
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createLinks", {
        platform: selectedPlatform,
        links,
      })
      .then((res) => {
        console.log(res);
        setLink([...links, { platform: selectedPlatform, links }]);
        setPlatforms([...platforms, selectedPlatform]);
      })
      .catch((err) => console.log(err));
  };

  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform);
    setIsClicked(false);
  };

  const getPlatformImage = (platform) => {
    switch (platform) {
      case "Facebook":
        return facebook;
      case "Github":
        return github;
      case "Twitch":
        return twitch;
      case "Twitter":
        return twitter;
      case "Youtube":
        return youtube;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <div className="left">
        <img src={phone} />
      </div>
      <div className="right">
        <div className="title">
          <h1>Customize your links</h1>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button>+Add new link</button>
        </div>
        <div className="link1">
          <div className="title">
            <h1>Link1</h1>
            <div>Remove</div>
          </div>
          <h3>Platform</h3>
          <button onClick={() => setIsClicked(!isClicked)}>
            <img src={getPlatformImage(selectedPlatform)} alt="" />
            {selectedPlatform}
            <img src={iconChevron} alt="iconChevron" />
          </button>
          {isClicked && (
            <div className="dropdown-menu">
              {/* <button onClick={() => handleSelectPlatform("Facebook")}>
                <img src={facebook} alt="facebook" /> Facebook
              </button>
              <button onClick={() => handleSelectPlatform("Twitter")}>
                <img src={twitter} alt="twitter" /> Twitter
              </button>
              <button onClick={() => handleSelectPlatform("Github")}>
                <img src={github} alt="github" />
                Github
              </button>
              <button onClick={() => handleSelectPlatform("Youtube")}>
                <img src={youtube} alt="" />
                Youtube
              </button>
              <button onClick={() => handleSelectPlatform("Twitch")}>
                <img src={twitch} alt="twitch" />
                Twitch
              </button> */}
              {platforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectPlatform(platform)}
                >
                  <img src={getPlatformImage(platform)} alt={platform} />
                  {platform}
                </button>
              ))}
            </div>
          )}
          <h3>Link</h3>
          <div className="enter-link">
            <img src={linkIcon} alt="" />
            <form onSubmit={Submit}>
              <input
                type="text"
                placeholder="enter link"
                onChange={(e) => setLink(e.target.value)}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="link1">
          <div className="title">
            <h1>Link1</h1>
            <div>Remove</div>
          </div>
          <h3>Platform</h3>
          <button onClick={() => setIsClicked(!isClicked)}>
            <img src={getPlatformImage(selectedPlatform)} alt="" />
            {selectedPlatform}
            <img src={iconChevron} alt="iconChevron" />
          </button>
          {isClicked && (
            <div className="dropdown-menu">
              <button onClick={() => handleSelectPlatform("Facebook")}>
                <img src={facebook} alt="facebook" /> Facebook
              </button>
              <button onClick={() => handleSelectPlatform("Twitter")}>
                <img src={twitter} alt="twitter" /> Twitter
              </button>
              <button onClick={() => handleSelectPlatform("Github")}>
                <img src={github} alt="github" />
                Github
              </button>
              <button onClick={() => handleSelectPlatform("Youtube")}>
                <img src={youtube} alt="" />
                Youtube
              </button>
              <button onClick={() => handleSelectPlatform("Twitch")}>
                <img src={twitch} alt="twitch" />
                Twitch
              </button>
            </div>
          )}
          <h3>Link</h3>
          <div className="enter-link">
            <img src={linkIcon} alt="" />
            <input
              type="text"
              value={links}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
