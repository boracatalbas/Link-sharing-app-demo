import React from "react";
import "./Profile.scss";
import Phone from "../../components/Phone/Phone";
import ProfileDetail from "../../components/ProfileDetail/profileDetail";

const Profile = () => {
  return (
    <div className="profile">
      <Phone />
      <ProfileDetail />
    </div>
  );
};

export default Profile;
