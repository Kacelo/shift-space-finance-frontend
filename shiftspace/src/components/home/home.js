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
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <LandingPage />
      {/* <Carousel /> */}
      <Container>
        {/* <ApplicationProcess /> */}
        <AppProccess />
        {/* <div class="row" id="services">
          <h2>Our Services</h2>
          <div class="col">
            <h3>Provide short term loans</h3>
            It is a well-known fact that emergencies arise in life at the most
            inopportune moments. And when they do, we want to do whatever we can
            to help our customers get back on their feet as quickly as possible.
            That’s why we offer the best service possible, with the goal of
            getting you back on track in no time at all.
          </div>
          <div class="col">
            <h3>Micro-lending</h3>
            Micro-lending If you are in need of fast money and need it fast,
            Mcrolending offers loans at 30% interest rate and always pays on
            time.
          </div>
          <div class="col">
            <h3>Purchase order financing</h3>
            Provide clients with the funds they require when they need it. By
            providing clients with purchase order financing, you can make it
            easier for them to buy goods and services before they are paid. We
            provide access to funds for purchase orders by leveraging our strong
            relationships with suppliers and customers.
          </div>
        </div> */}
        <br></br>
      </Container>
      <div className="our_services" style={backGroundStyle}>
        <Container>
          <OurServices />
        </Container>
      </div>
      <Container>
        <ContactUs />
        <TermsAndConditions/>
        <div className="ui secondary bottom  menu">
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default Home;
