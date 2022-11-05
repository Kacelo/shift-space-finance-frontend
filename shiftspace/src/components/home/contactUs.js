import React from "react";
import { Container } from "react-bootstrap";
import { Divider, Form, Grid, Image } from "semantic-ui-react";
import MDBNFooter from "../footer/MDBNFooter";
import MDBNNav from "./mbnNav";

const footerStyle = {
  position: "absolute",
  bottom: "0",
  width: "100%",
};
const ContactUs = () => (
  <>
  <MDBNNav />
  <Container>
     <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid divided="vertically" stackable={true}>
      <Grid.Row textAlign={"center"}>
        <h1>Get In Touch</h1>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <div class="container">
            <div>+264853454440</div>
            <div>info@m1.com.na</div>
            <div>www.shiftfinance.m1.com.na</div>
            <div>Windhoek Namibia</div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="Email" placeholder="Email Address" />
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
            </Form.Group>
            <Form.TextArea label="Message" placeholder="Message" />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>
        
      </Grid.Row>
    </Grid>
  </Container>
  <MDBNFooter />

  </>
  
);

export default ContactUs;
