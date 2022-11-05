import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

const backGroundStyle = {
  position: "absolute",
  bottom: "0",
  width: "100%",
};
const Footer = () => (
  <Grid divided="vertically">
    <Grid.Row columns={3}>
      <Grid.Column >
        <br></br>
        <br></br>
        <a href="/privacy-policy">Privacy Policy</a>
        <br></br>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <p>Powered by ShiftSpace</p>{" "}
      </Grid.Column>
      <Grid.Column >
        <Image
          src={require("../../assets/ShiftSpace-png.png")}
          size={"small"}
        />
        ©ShiftSpace Finance 2022
      </Grid.Column>
      <Grid.Column >
        <Image
          src={require("../../assets/Logo-M1-Portrait-Tech.png")}
          size={"small"}
          
        />
        <a href="https://www.m1.com.na">Developed by M1 Technologies</a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Footer;
