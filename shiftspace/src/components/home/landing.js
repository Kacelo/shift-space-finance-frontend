import React from "react";
import { Button, Container, Grid, Image, Segment } from "semantic-ui-react";
import Carousel from "react-bootstrap/Carousel";

const backGroundStyle = {
  backgroundColor: "#1C2541",
  color: "white",
  padding: "4rem 0 0 0",
};
const LandingPage = () => (
  <Grid columns="equal" stackable={true}  style={backGroundStyle}>
    <Carousel fade>
      <Carousel.Item>
        <Grid columns="equal" stackable={true}>
          {" "}
          <Grid.Row style={backGroundStyle} stretched={true}>
            <Grid.Column verticalAlign={"middle"}>
              <Container textAlign="center">
                <div id="introduction">
                  <h1>Get a loan fast.</h1>
                  <p>
                    Get your cash in as little as 1 hour with ShiftSpace
                    Finance.
                  </p>
                  <p>Apply now and get approved today!</p>
                </div>
                <Container>
                  <br></br>
                  <Button primary>Apply Now</Button>
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={require("../../assets/woman3.png")}
                //   size={"small"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Carousel.Item>
      <Carousel.Item>
        <Grid columns="equal" stackable={true}>
          {" "}
          <Grid.Row style={backGroundStyle} stretched={true}>
            <Grid.Column verticalAlign={"middle"}>
              <Container textAlign="center">
                <div id="introduction">
                  <h1>Get the money you need when you need it most.</h1>
                  <p>
                    ShiftSpace Finance is here to provide efficient Short term
                    microlending services for people in need of emergency cash.
                    We help get you back on your feet, so you can take care of
                    what's important.
                  </p>
                </div>
                <Container>
                  <br></br>
                  <Button primary>Apply Now</Button>
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={require("../../assets/woman3.png")}
                //   size={"small"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Carousel.Item>
      <Carousel.Item>
        <Grid columns="equal" stackable={true}>
          {" "}
          <Grid.Row style={backGroundStyle} stretched={true}>
            <Grid.Column verticalAlign={"middle"}>
              <Container textAlign="center">
                <div id="introduction">
                  <h1>Get the help you need with short term loans.</h1>
                  <p>
                    Short-term loans are designed to lend you the money you need
                    until your next paycheck. Stop worrying about your finances
                    and get the help you need.
                  </p>
                </div>
                <Container>
                  <br></br>
                  <Button primary>Apply Now</Button>
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={require("../../assets/woman3.png")}
                //   size={"small"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Carousel.Item>
    </Carousel>
  </Grid>
);

export default LandingPage;
