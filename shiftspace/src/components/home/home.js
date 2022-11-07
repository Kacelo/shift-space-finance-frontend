import React from "react";
import { Container, Segment } from "semantic-ui-react";
import AppProccess from "./appProcess";
import Footer from "./footer";
import LandingPage from "./landing";
import Navbar from "./navbar";
import OurServices from "./ourServices";
import MDBNNav from "./mbnNav";
import MDBNFooter from "../footer/MDBNFooter";

function Home() {
  const backGroundStyle = {
    backgroundColor: "#1C2541",
    color: "white",
    padding: "5rem",
    margin: "2rem 0",
  };

  return (
    <>
      <MDBNNav />
      <br></br>
      <LandingPage />
      <Container>
        <AppProccess />
        <br></br>
      </Container>
      <div id="our_services" style={backGroundStyle}>
        <Container>
          <OurServices />
        </Container>
      </div>

      <MDBNFooter />
    </>
  );
}

export default Home;
