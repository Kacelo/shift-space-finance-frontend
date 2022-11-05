import React from "react";
import { Container, Grid, Image, Card } from "semantic-ui-react";
import MDBNFooter from "../footer/MDBNFooter";
import Footer from "../home/footer";
import MDBNNav from "../home/mbnNav";
import Navbar from "../home/navbar";

const backGroundStyle = {
  backgroundColor: "#1C2541",
  color: "white",
  padding: "4rem 0 0 0",
};
const footerStyle = {
  // position: "absolute",
  bottom: "-20px",
  width: "100%",
};
const imageCSS = {
  borderRadius: "8%",
};
function AboutUs() {
  return (
    <div>
      <MDBNNav />{" "}
      <br></br>
      <Container>
        <Grid columns={2} stackable={true}>
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Image
                  src={require("../../assets/laptopSquare.png")}
                  size={"large"}
                  style={imageCSS}
                />
              </Container>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h3>About Us</h3>
                <p>
                  ShiftSpace Finance is a 100% Namibian corporation registered
                  with the Business and Intellectual Property Authority (BIPA),
                  Registration Number CC/2022/08696. ShiftSpace Financial
                  Services CC is licensed and regulated by the Namibia Financial
                  Institutions Supervisory Institution Authority (NAMFISA). We
                  are committed to providing a diverse range of financial
                  services in compliance with international standards and
                  regulations. Our goal is to be the leading financial services
                  provider in the country.
                </p>
                <p>
                  Its main purpose is to provide efficient micro-lending and
                  short-term loan service to individuals across Namibia.
                </p>
              </div>
              <div>
                {" "}
                <h3>Our Mission</h3>
                <p>
                  To provide a secured and accessible financial services company
                  that is focused on developing the financial needs of the
                  people of Namibia.
                </p>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To be the trusted financial services provider for the people
                  of Namibia.
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Container>
      <MDBNFooter />
    </div>
  );
}

export default AboutUs;
