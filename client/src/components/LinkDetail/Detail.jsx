import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Detail.scss";
import iconChevron from "../../assets/images/icon-chevron-down.svg";
import linkIcon from "../../assets/images/icon-links-header.svg";
import iconDrag from "../../assets/images/icon-drag-and-drop.svg";

const Detail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [links, setLinks] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [demo, setDemo] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/devlinks")
      .then((res) => {
        setPlatforms(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFetchPlatforms = () => {
    setIsClicked(!isClicked);
    axios
      .get("http://localhost:3000/devlinks")
      .then((res) => {
        setPlatforms(res.data.data);
        const selectedPlatformData = res.data.data.find(
          (platform) => platform.platform === selectedPlatform
        );

        if (selectedPlatformData) {
          setDemo(selectedPlatformData.linkler);
          setId(selectedPlatformData._id);
        } else {
          setDemo([]);
          setId(0);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setDemo(
      platforms
        .filter((platform) => platform.platform === selectedPlatform)
        .map((platform) => platform.linkler)
    );
  }, [selectedPlatform, platforms]);

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/devlinks/${id}`, {
        platform: selectedPlatform,
        linkler: demo,
      })
      .then((response) => {
        console.log("link updated successfully", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/devlinks", {
        platform: selectedPlatform,
        linkler: demo,
      })
      .then((response) => {
        console.log("link create successfully", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/devlinks/${id}`)
      .then(() => {
        console.log("sa");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="detail">
      <div className="right">
        <div className="title">
          <h1>Customize your links</h1>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button onClick={handleAdd}>+Add new link</button>
        </div>
        <div className="link1">
          <div className="link1-link">
            <img src={iconDrag} />
            <h1>Link #1</h1>
            <button onClick={handleDelete}>Remove</button>
          </div>
          <h3>Platform</h3>
          <button onClick={handleFetchPlatforms}>
            <img src={iconChevron} alt="iconChevron" />
            <div className={`dropdown-menu ${isClicked ? "true" : ""}`}>
              {platforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlatform(platform.platform)}
                >
                  {platform.platform}
                </button>
              ))}
            </div>
          </button>

          <h3>Link</h3>
          <div className="enter-link">
            <img src={linkIcon} alt="" />

            <input
              type="text"
              placeholder="enter link"
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
            />

            <button onClick={handleEdit}>Submit update</button>
          </div>
        </div>

        <div className="link1">
          {/* <div className="link1-link">
            <img src={iconDrag} />
            <h1>Link #2</h1>
            <div>Remove</div>
          </div>
          <h3>Platform</h3>
          <button onClick={handleFetchPlatforms}>
            <img src={iconChevron} alt="iconChevron" />
            <div className={`dropdown-menu ${isClicked ? "true" : ""}`}>
              {platforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlatform(platform.platform)}
                >
                  {platform.platform}
                </button>
              ))}
            </div>
          </button>

          <h3>Link</h3>
          <div className="enter-link">
            <img src={linkIcon} alt="" />

            <input type="text" placeholder="enter link" value={demo} />

            <button onClick={handleEdit}>Submit</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
