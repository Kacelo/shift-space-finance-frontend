import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import TermsAndConditions from "../terms-and-conditions/termsAndConditions";

import ApplicationProcess from "./applicationProcess";
import AppProccess from "./appProcess";
import Carousel from "./carousel";
import ContactUs from "./contactUs";
import Footer from "./footer";
import LandingPage from "./landing";
import Navbar from "./navbar";
import OurServices from "./ourServices";

function Home() {
  const backGroundStyle = {
    backgroundColor: "#1C2541",
    color: "white",
    padding: "5rem",
    margin: "2rem 0",
  };

  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <br></br>
      <br></br>
      <LandingPage />
      <Container>
        <AppProccess />
        <br></br>
      </Container>
      <div className="our_services" style={backGroundStyle}>
        <Container>
          <OurServices />
        </Container>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
