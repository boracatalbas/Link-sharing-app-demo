import React from "react";
import Phone from "../../components/Phone/Phone";
import Detail from "../../components/LinkDetail/Detail";

import "./Link.scss";

const Link = () => {
  return (
    <div className="link">
      <Phone />
      <Detail />
    </div>
  );
};

export default Link;
