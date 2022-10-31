import React from "react";
import { Image } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div class="ui secondary fixed  menu">
      <Image src={require("../../assets/ShiftSpace-png.png")} size={"small"}/>
      <div class="right menu">
        <a class="active item">Home</a>
        <a class="item">Messages</a>
        <a class="item">Friends</a>
      </div>
    </div>
  );
};

export default Navbar;
