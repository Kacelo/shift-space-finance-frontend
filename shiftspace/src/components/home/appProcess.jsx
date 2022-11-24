import React from "react";
import { Button, Card, Container, Grid, Image, List } from "semantic-ui-react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBBtn,
} from "mdb-react-ui-kit";
const backGroundStyle = {
  padding: "2rem",
  margin: "2rem",
};
const imageCSS = {
  width: "50rem",
};
const card1and3 = {
  color: "black",
  height: "22rem !important",
  marginTop: "1.5em",
  boxShadow: "0 0px 0px 0px rgb(0 0 0 / 7%), 0 0px 0px 0px rgb(0 0 0 / 4%)",
  textAlign: "center",
};
const cardImg = {
  width: "20%",
};
const headings = {
  marginTop: "2rem",
  color: "#4f4f4f",
};
const AppProccess = () => (
  <Grid style={backGroundStyle} stackable={true}>
    <Grid.Row columns={2}>
      <Grid.Column width={4}>
        <Container>
          <Image
            src={require("../../assets/Untitled design (4).webp")}
            size={"large"}
            // width="50rem"
            height="auto"
            alt="man paying with credit card"
            style={imageCSS}
          />
        </Container>
      </Grid.Column>
      <Grid.Column width={12}>
       
        <Grid stackable={true} centered>
          {/* <Card.Group centered itemsPerRow={4} stackable={true}>
            <Card>
              <Card.Content>
                <Card.Header style={{ margin: "2rem 0" }}>
                  SHORT TERM LOANS
                </Card.Header>
                <Card.Description>
                  It is a well-known fact that emergencies arise in life at the
                  most inopportune moments. And when they do, we want to do
                  whatever we can to help our customers get back on their feet
                  as quickly as possible. That’s why we offer the best service
                  possible, with the goal of getting you back on track in no
                  time at all.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header style={{ margin: "2rem 0" }}>
                  SHORT TERM LOANS
                </Card.Header>
                <Card.Description>
                  It is a well-known fact that emergencies arise in life at the
                  most inopportune moments. And when they do, we want to do
                  whatever we can to help our customers get back on their feet
                  as quickly as possible. That’s why we offer the best service
                  possible, with the goal of getting you back on track in no
                  time at all.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card raised={true}>
              <Card.Content>
                <Card.Header style={{ margin: "2rem 0", color: "white" }}>
                  MICRO-LENDING
                </Card.Header>
                <Card.Description style={{ color: "white" }}>
                  Micro-lending If you are in need of fast money and need it
                  fast, Mcrolending offers loans at 30% interest rate and always
                  pays on time.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header style={{ margin: "2rem 0" }}>
                  PURCHASE ORDER FINANCING
                </Card.Header>
                <Card.Description>
                  Provide clients with the funds they require when they need it.
                  By providing clients with purchase order financing, you can
                  make it easier for them to buy goods and services before they
                  are paid. We provide access to funds for purchase orders by
                  leveraging our strong relationships with suppliers and
                  customers.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group> */}
          <Container>
            <MDBTypography
              tag="h1"
              style={{
                color: "#4f4f4f",
                //   padding: "3rem",
                fontWeight: "bolder",
                marginBottom: "2rem",
              }}
            >
              HOW IT WORKS
            </MDBTypography>
          </Container>
          <Container>
            <MDBTypography
              tag="h2"
              style={{
                color: "#4f4f4f",
                //   padding: "3rem",
                fontWeight: "",
                // marginBottom: "2rem",
              }}
            >
              Our Hassle Free Application Process{" "}
            </MDBTypography>
          </Container>

          <MDBRow className="row-cols-1 row-cols-lg-4 row-cols-md-2 g-0">
            <MDBCol>
              <MDBCard className="h-120" style={card1and3}>
                <Container>
                  <MDBCardImage
                    src={require("../../assets/document.png")}
                    alt="..."
                    position="top"
                    style={cardImg}
                  />
                </Container>

                <MDBCardTitle style={headings}>STEP 1</MDBCardTitle>

                <MDBCardBody style={{ textAlign: "justify" }}>
                  <MDBCardText>
                    <MDBTypography
                      tag="h5"
                      style={{
                        color: "#4f4f4f",
                        //   padding: "3rem",
                        fontWeight: "bolder",
                        marginBottom: "2rem",
                        textAlign: "center",
                      }}
                    >
                      Provide Required Documents{" "}
                    </MDBTypography>{" "}
                    <List ordered>
                      <List.Item>Certified ID Copy</List.Item>
                      <List.Item>Latest Proof of Income (Payslip)</List.Item>
                      <List.Item>3 Months Bank Statement</List.Item>
                    </List>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-120" style={card1and3}>
                <Container>
                  <MDBCardImage
                    src={require("../../assets/assept-document.png")}
                    alt="..."
                    position="top"
                    style={cardImg}
                  />
                </Container>
                <MDBCardTitle style={headings}>STEP 2</MDBCardTitle>

                <MDBCardBody style={{ textAlign: "justify" }}>
                  <MDBCardText>
                    <MDBTypography
                      tag="h5"
                      style={{
                        color: "#4f4f4f",
                        //   padding: "3rem",
                        fontWeight: "bolder",
                        marginBottom: "2rem",
                        textAlign: "center",
                      }}
                    >
                      Option 1: Online Application{" "}
                    </MDBTypography>{" "}
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
                        We will then send you our loan application form for the
                        full completion.
                      </List.Item>
                      <List.Item>Sent back the signed form to us.</List.Item>
                      <List.Item>Calculate your affordability.</List.Item>
                      <List.Item>
                        Then fund will be paid in your account.
                      </List.Item>
                    </List>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-100" style={card1and3}>
                <Container>
                  <MDBCardImage
                    src={require("../../assets/assept-document.png")}
                    alt="..."
                    position="top"
                    style={cardImg}
                  />
                </Container>
                <MDBCardTitle style={headings}>STEP 2 cnt...</MDBCardTitle>
                <MDBCardBody style={{ textAlign: "justify" }}>
                  <MDBCardText>
                    <MDBTypography
                      tag="h5"
                      style={{
                        color: "#4f4f4f",
                        //   padding: "3rem",
                        fontWeight: "bolder",
                        marginBottom: "2rem",
                        textAlign: "center",
                      }}
                    >
                      Option 2: Face to Face{" "}
                    </MDBTypography>{" "}
                    <List ordered>
                      <List.Item>Provide your required documents</List.Item>
                      <List.Item>
                        {" "}
                        We will fill the application and the loan agreement and
                        sign both documents.
                      </List.Item>
                      <List.Item>
                        Within 5 minutes you receive your cash.
                      </List.Item>
                    </List>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-120" style={card1and3}>
                <Container>
                  <MDBCardImage
                    src={require("../../assets/checkbox.png")}
                    alt="..."
                    position="top"
                    style={cardImg}
                  />
                </Container>
                <MDBCardTitle style={headings}>STEP 3</MDBCardTitle>
                <MDBCardBody style={{ textAlign: "justify" }}>
                  <MDBCardText>
                    <Container style={{ textAlign: "center" }}>
                      <MDBTypography
                        tag="h5"
                        style={{
                          color: "#4f4f4f",
                          //   padding: "3rem",
                          fontWeight: "bolder",
                          marginBottom: "2rem",
                        }}
                      >
                        Payment{" "}
                      </MDBTypography>{" "}
                    </Container>
                    <MDBTypography
                      tag="p"
                      style={
                        {
                          // color: "#4f4f4f",
                          // //   padding: "3rem",
                          // fontWeight: "bolder",
                          // marginBottom: "2rem",
                        }
                      }
                    >
                      Sign Agreement and payment will be made to your account or
                      in cash{" "}
                    </MDBTypography>{" "}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Grid>
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
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AppProccess;
