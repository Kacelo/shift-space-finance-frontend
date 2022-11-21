import React from "react";
import { Container } from "semantic-ui-react";
import AppProccess from "./appProcess";
import LandingPage from "./landing";
import OurServices from "./ourServices";
import MDBNNav from "./mbnNav";
import MDBNFooter from "../footer/MDBNFooter";
import ScrollToTop from "react-scroll-to-top";
import OurServicesMDB from "../our-services/our-services";
function Home() {
  const backGroundStyle = {
    backgroundColor: "#EFF5F5",
    color: "white",
    padding: "15rem 0",
    textAlign: "center",
    // marginBottom: "5em"
  };

  return (
    <>
      <ScrollToTop smooth />
      <MDBNNav />
      <br></br>
      <LandingPage />
      <div id="our_services" style={backGroundStyle}>
        <Container>
          {/* <OurServices /> */}
          <OurServicesMDB />
        </Container>
      </div>
      {/* <Container style={{ margin: "0 0" }}> */}
        <AppProccess />
        <br></br>
      {/* </Container> */}

      <MDBNFooter />
    </>
  );
}

export default Home;
