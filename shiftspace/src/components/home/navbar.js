import React from "react";
import { Container, Image } from "semantic-ui-react";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <Container>
      <div class="ui fixed  menu">
        <Image
          src={require("../../assets/ShiftSpace-Logo-Horizontal-Small.png")}
          size={"small"}
          href="/"
        />
        <div class="right menu">
          <a class="item" href="/#our_services">Our Services</a>
          <a class="item" href="/about-us">About Us</a>
          <a class="item" href="/contact-us">Contact Us</a>
        </div>
      </div>
      
    </Container>
  );
};

export default Navbar;
