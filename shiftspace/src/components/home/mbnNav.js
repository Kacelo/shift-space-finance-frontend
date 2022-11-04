import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Image } from "semantic-ui-react";

function MDBNNav() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar sticky expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          {" "}
          <Image
            src={require("../../assets/ShiftSpace-Logo-Horizontal-Small.png")}
            size={"small"}
            href="/"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Our Services</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink href="/about-us">About Us</MDBNavbarLink>

            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink href="/contact-us">Contact Us</MDBNavbarLink>

            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default MDBNNav;
