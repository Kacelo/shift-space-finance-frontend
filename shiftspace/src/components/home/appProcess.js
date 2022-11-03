import React from "react";
import { Card, Container, Grid, Image, List, Segment } from "semantic-ui-react";

const backGroundStyle = {
    padding: "2rem",
    margin: "2rem",
  };
  const imageCSS = {
width:"50rem"
  }
const AppProccess = () => (
    
  <Grid columns={2} style ={backGroundStyle} stackable={true}>
    <Grid.Row  >
      <Grid.Column>
        <Container >
        <Image
          src={require("../../assets/Untitled design (4).png")}
            size={"large"}
          
          style={imageCSS}
        />
        </Container>
        
      </Grid.Column>
      <Grid.Column>
        <h1>Our Hassle Free Application Process</h1>

        <h3>Step 1: Provide Required Documents</h3>
        <List ordered>
          <List.Item>Certified ID Copy</List.Item>
          <List.Item>Latest Proof of Income (Payslip)</List.Item>
          <List.Item>3 Months Bank Statement</List.Item>
        </List>
        <h3>Step 2: Apply</h3>
        <h3>Option 1: Online Application</h3>
        <List ordered>
          <List.Item>
            Email your required documents to shiftfinance@m1.com.na
          </List.Item>
          <List.Item>
            We then do the Comp scan enquiry to see if the client is active at
            other short-term lender
          </List.Item>
          <List.Item>
            {" "}
            We will then send you our loan application form for the full
            completion.
          </List.Item>
          <List.Item>Sent back the signed form to us.</List.Item>
          <List.Item>Calculate your affordability.</List.Item>
          <List.Item>Then fund will be paid in your account.</List.Item>
        </List>
        <h3>Option 2: Face to Face</h3>
        <List ordered>
          <List.Item>Provide your required documents</List.Item>
          <List.Item>
            {" "}
            We will fill the application and the loan agreement and sign both
            documents.
          </List.Item>
          <List.Item>Within 5 minutes you receive your cash.</List.Item>
        </List>
        <Grid.Row>
          <Grid.Column>
            {/* <Card>
              <Card.Content>
                <Card.Header>Option 1: Online Application</Card.Header>
              </Card.Content>
              <Card.Content>
                <List ordered>
                  <List.Item>
                    Email your required documents to shiftfinance@m1.com.na
                  </List.Item>
                  <List.Item>
                    We then do the Comp scan enquiry to see if the client is
                    active at other short-term lender
                  </List.Item>
                  <List.Item>
                    {" "}
                    We will then send you our loan application form for the full
                    completion.
                  </List.Item>
                  <List.Item>Sent back the signed form to us.</List.Item>
                  <List.Item>Calculate your affordability.</List.Item>
                  <List.Item>Then fund will be paid in your account.</List.Item>
                </List>
              </Card.Content>
            </Card> */}
          </Grid.Column>
          {/* <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Option 2: Face to Face</Card.Header>
              </Card.Content>
              <Card.Content>
                <List ordered>
                  <List.Item>Provide your required documents</List.Item>
                  <List.Item>
                    {" "}
                    We will fill the application and the loan agreement and sign
                    both documents.
                  </List.Item>
                  <List.Item>Within 5 minutes you receive your cash.</List.Item>
                </List>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </Card.Content>
            </Card>
          </Grid.Column> */}
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AppProccess;
