import React from "react";
import { Container } from "react-bootstrap";
import { Divider, Form, Grid, Image, Segment } from "semantic-ui-react";
import MDBNFooter from "../footer/MDBNFooter";
import MDBNNav from "../home/mbnNav";

const imageStyle = {
  cursor: "pointer",
};
const imageCSS = {
  borderRadius: "1em",
};
const font = {
  fontsize: "xxx-large"
}
const ContactUs = () => (
  <>
    <MDBNNav />
    <Container stretched>
      <Grid divided="vertically" stackable={true} padded={"vertically"}>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <h1 style={font}>Get In Touch</h1>
          </Grid.Column>
          <Grid.Column>
            <Image
              // size="small"
              src={require("../../assets/flat-lay-business-concept.jpg")}
              style={imageCSS}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            {/* <div class="container">
              <div>+264853454440</div>
              <div>info@m1.com.na</div>
              <div>www.shiftfinance.m1.com.na</div>
              <div>Windhoek Namibia</div>
            </div> */}
            <div class="container">
              <div className="row">
                <div className="col" style={imageStyle}>
                  <h5>Send us a message</h5>{" "}
                  <a href="https://wa.me/264813454440?text=Hello">
                    {" "}
                    <Image
                      size="small"
                      src={require("../../assets/03_Stacked/01_Digital/03_PNG/Black/Digital_Stacked_Black.png")}
                      wrapped
                    />
                  </a>
                </div>
                <div className="col" style={imageStyle}>
                  <h5>Give us a call</h5>
                  <a href="tel:+264853454440">
                    <Image
                      size="tiny"
                      src={require("../../assets/iphone.png")}
                      wrapped
                    />
                  </a>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h5>or leave us an email</h5>

            <Form
              action="https://getform.io/f/a4476f0a-fced-4444-b3f9-6918ef2e7958"
              method="POST"
            >
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Email"
                  name="email"
                  placeholder="Email Address"
                />
                <Form.Input
                  fluid
                  label="First name"
                  name="firstname"
                  placeholder="First name"
                />
                <Form.Input
                  fluid
                  label="Last name"
                  name="lastname"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.TextArea
                label="Message"
                name="message"
                placeholder="Message"
              />
              <Form.Button primary>Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <MDBNFooter />
  </>
);

// export default ContactUs;

export default ContactUs;
