import React from "react";
import "./Phone.scss";
import phone from "../../assets/images/illustration-phone-mockup.svg";
const Phone = () => {
  return (
    <div className="phone">
      <div className="left">
        <img src={phone} />
      </div>
    </div>
  );
};

export default Phone;
