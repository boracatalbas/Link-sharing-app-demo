import React from "react";
import "./ProfileDetail.scss";
import uploadImg from "../../assets/images/icon-upload-image.svg";

const ProfileDetail = () => {
  return (
    <div className="profileDetail">
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile</p>
      <div className="picture">
        <p>Profile Picture</p>
        <img src={uploadImg} alt="img" />

        <p>image must be below 1024x1024 px. Use. PNG, JPG or BPM format.</p>
      </div>
      <div className="input-wrapper">
        <div className="inputs">
          <p>First Name*</p>
          <input type="text" />
        </div>
        <div className="inputs">
          <p>Last Name*</p>
          <input type="text" />
        </div>
        <div className="inputs">
          <p>Email</p>
          <input type="mail" />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
