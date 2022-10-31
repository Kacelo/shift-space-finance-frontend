import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

const Footer = () => (
  <Grid divided="vertically">
    <Grid.Row columns={3}>
      <Grid.Column>
        <a href="./privacy/index.html">Privacy Policy</a>
        <a className="container">Terms & Conditions</a>
        <a className="container">Powered by ShiftSpace</a>{" "}
      </Grid.Column>
      <Grid.Column>
      <Image src={require("../../assets/ShiftSpace-png.png")} size={"tiny"}/>
        ©ShiftSpace Finance 2022
      </Grid.Column>
      <Grid.Column>
      <Image src={require("../../assets/Logo-M1-Portrait-Tech.png")} size={"tiny"}/>
        Developed by M1 Technologies
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Footer;
