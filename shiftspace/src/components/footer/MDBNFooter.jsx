import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Image } from "semantic-ui-react";

const imgStyle = {
  display: "inline-block",
};
function MDBNFooter() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <br></br>
            <br></br>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/about-us">Get to know us</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li>
                <Image
                  src={require("../../assets/ShiftSpace-png.png")}
                  size={"small"}
                  style={imgStyle}
                />
              </li>
              <li>
                <p>Powered by ShiftSpace</p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li className="text-center">
                <Image
                  src={require("../../assets/Logo-M1-Portrait-Tech.png")}
                  size={"small"}
                  style={imgStyle}
                />
              </li>
              <li>
                <a href="https://www.m1.com.na">Developed by M1 Technologies</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          ShiftSpace Finance
        </a>
      </div>
    </MDBFooter>
  );
}
export default MDBNFooter;
