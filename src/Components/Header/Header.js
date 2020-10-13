import React from "react";
import "./Header.css";
import Icon from "../Assests/group-2.png";
import { Button } from "@material-ui/core";

const Header = () => {
  return (
    <div class="wrapper">
      <img className="Group-2" src={Icon} alt="Icon" />
      <ul className="NavBar">
        <li class="Log-in">Log in</li>
        <Button class="Rectangle" variant="outlined">
          Try Tabella
        </Button>
      </ul>
    </div>
  );
};

export default Header;
