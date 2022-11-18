import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Modal,
} from "semantic-ui-react";
import Carousel from "react-bootstrap/Carousel";

const backGroundStyle = {
  backgroundColor: "#1C2541",
  color: "white",
  padding: "4rem 0 0 0",
};
const modalStyle = {
  height: "40vh",
  position: "initial",
};
const buttonStyle = {
  backgroundColor: "#0077C8",
  color: "white",
};
function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={buttonStyle}>Apply Now</Button>}
      size={"tiny"}
      style={modalStyle}
    >
      <Modal.Header>Redminder!</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={require("../../assets/37005.jpg")} wrapped />
        <Modal.Description>
          <Header>
            Make sure you have the following documents before applying
          </Header>
          <List ordered>
            <List.Item>Certified ID Copy</List.Item>
            <List.Item>Latest Proof of Income (Payslip)</List.Item>
            <List.Item>3 Months Bank Statement</List.Item>
          </List>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          cancel
        </Button>
        <Button
          content="Proceed to Email"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
          as="a"
          href="mailto:shiftfinance@m1.com.na"
          target="_blank"
        >
          {/* <a href="mailto:name@email.com"></a> */}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

// export default ModalExampleShorthand

const LandingPage = () => (
  <Grid columns="equal" stackable={true} style={backGroundStyle}>
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
                  <ModalExampleModal />
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={require("../../assets/woman3.webp")}
                alt="woman smiling"
                fetchpriority="low"
                width= "auto"
                height="auto"
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
                  <ModalExampleModal />
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={require("../../assets/woman3.webp")}
                alt="woman smiling"
                fetchpriority="low"
                width= "auto"
                height="auto"
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
                  <ModalExampleModal />
                </Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                src={require("../../assets/woman3.webp")}
                alt="woman smiling"
                fetchpriority="low"
                width= "auto"
                height="auto"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Carousel.Item>
    </Carousel>
  </Grid>
);

export default LandingPage;
