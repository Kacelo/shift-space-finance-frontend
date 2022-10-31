import React from "react";
import { Form, Grid, Image } from "semantic-ui-react";

const ContactUs = () => (
  <Grid divided="vertically" stackable={true}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <div class="container">
          <h2>Contact Us</h2>
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
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ContactUs;
