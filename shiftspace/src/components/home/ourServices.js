import React from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";

const backGroundStyle = {
  backgroundColor: "#1C2541",
  color: "white",
  padding: "1em 0",
  margin: "2rem 0",
};
const OurServices = () => (
  <Grid divided="vertically" stackable={true} style={backGroundStyle}>
    <h1>Our Services</h1>

    <Grid.Row columns={3}>
      <Grid.Column>
        <h2>Provide short term loans</h2>
        <p>
          It is a well-known fact that emergencies arise in life at the most
          inopportune moments. And when they do, we want to do whatever we can
          to help our customers get back on their feet as quickly as possible.
          That’s why we offer the best service possible, with the goal of
          getting you back on track in no time at all.
        </p>
      </Grid.Column>
      <Grid.Column>
        <h2>Micro-lending</h2>
        <p>
          Micro-lending If you are in need of fast money and need it fast,
          Mcrolending offers loans at 30% interest rate and always pays on time.
        </p>
      </Grid.Column>
      <Grid.Column>
        <h2>Purchase order financing</h2>
        <p>
          Provide clients with the funds they require when they need it. By
          providing clients with purchase order financing, you can make it
          easier for them to buy goods and services before they are paid. We
          provide access to funds for purchase orders by leveraging our strong
          relationships with suppliers and customers.
        </p>
      </Grid.Column>
    </Grid.Row>
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
          <Card.Header>Molly Thomas</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </Grid>
);

export default OurServices;
