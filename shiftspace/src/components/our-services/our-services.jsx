import React from "react";
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
import { Button, Card, Grid, Image } from "semantic-ui-react";
const card1and3 = {
  color: "black",
  height: "22rem !important",
  marginTop: "1.5em",
};
const card2 = {
  color: "#FFFFFF",
  backgroundColor: "#1C2541",
    marginBottom: "7em",
    margin: "0em",
};
const headings = {
  marginTop: "2rem",
  color: "#4f4f4f",
};
function OurServicesMDB() {
  return (
    <>
    <b>
          <MDBTypography
            tag="h1"
            style={{
              color: "#4f4f4f",
            //   padding: "3rem",
              fontWeight: "bolder",
              marginBottom: "2rem",
            }}
          >
            Our Services
          </MDBTypography>
        </b>
      <MDBRow className="row-cols-1 row-cols-md-3 row-cols-sm-1 g-0">
        <MDBCol>
          <MDBCard className="h-120" style={card1and3}>
            <MDBCardTitle style={headings}>SHORT TERM LOANS</MDBCardTitle>

            <MDBCardBody style={{ textAlign: "justify" }}>
              <MDBCardText>
                It is a well-known fact that emergencies arise in life at the
                most inopportune moments. And when they do, we want to do
                whatever we can to help our customers get back on their feet as
                quickly as possible. That’s why we offer the best service
                possible, with the goal of getting you back on track in no time
                at all.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter style={{ borderTop: "0px", marginBottom: "1em" }}>
              <MDBBtn href="#">Apply Now</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100" style={card2}>
            <MDBCardTitle style={{ margin: "2rem 0" }}>
              MICRO-LENDING
            </MDBCardTitle>
            <MDBCardBody style={{ textAlign: "justify" }}>
              <MDBCardText>
                Micro-lending If you are in need of fast money and need it fast,
                Mcrolending offers loans at 30% interest rate and always pays on
                time.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter style={{ borderTop: "0px", marginBottom: "1em" }}>
              <MDBBtn href="#">Apply Now</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-120" style={card1and3}>
            <MDBCardTitle style={headings}>
              PURCHASE ORDER FINANCING
            </MDBCardTitle>
            <MDBCardBody style={{ textAlign: "justify" }}>
              <MDBCardText>
                Provide clients with the funds they require when they need it.
                By providing clients with purchase order financing, you can make
                it easier for them to buy goods and services before they are
                paid. We provide access to funds for purchase orders by
                leveraging our strong relationships with suppliers and
                customers.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter style={{ borderTop: "0px", marginBottom: "1em" }}>
              <MDBBtn href="#">Apply Now</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* <Grid stackable={true}>
        
        <Card.Group centered itemsPerRow={3} stackable={true}>
          <Card>
            <Card.Content>
              <Card.Header style={{ margin: "2rem 0" }}>
                SHORT TERM LOANS
              </Card.Header>
              <Card.Description>
                It is a well-known fact that emergencies arise in life at the
                most inopportune moments. And when they do, we want to do
                whatever we can to help our customers get back on their feet as
                quickly as possible. That’s why we offer the best service
                possible, with the goal of getting you back on track in no time
                at all.
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
          <Card style={card2} raised={true}>
            <Card.Content>
              <Card.Header style={{ margin: "2rem 0", color: "white" }}>
                MICRO-LENDING
              </Card.Header>
              <Card.Description style={{ color: "white" }}>
                Micro-lending If you are in need of fast money and need it fast,
                Mcrolending offers loans at 30% interest rate and always pays on
                time.
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
                By providing clients with purchase order financing, you can make
                it easier for them to buy goods and services before they are
                paid. We provide access to funds for purchase orders by
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
        </Card.Group>
      </Grid> */}
    </>
  );
}
export default OurServicesMDB;
