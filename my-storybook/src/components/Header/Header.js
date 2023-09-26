import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <div className="header">
      <h2 className="header">{children}</h2>
    </div>
  );
};

export default Header;
