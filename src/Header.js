import React from "react";
import "./Header.css";

function Header(props) {
  const { PageTitle } = props;

  return (
    <div>
      <header className="head">{PageTitle}</header>
    </div>
  );
}

export default Header;
