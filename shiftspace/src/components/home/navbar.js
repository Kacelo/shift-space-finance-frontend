import React from "react";
import { Container, Image } from "semantic-ui-react";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <Container>
      <div class="ui fixed  menu">
        <Image
          src={require("../../assets/ShiftSpace-png.png")}
          size={"small"}
        />
        <div class="right menu">
          <a class="item">Home</a>
          <a class="item">Messages</a>
          <a class="item">Friends</a>
        </div>
      </div>
      
    </Container>
  );
};

export default Navbar;
