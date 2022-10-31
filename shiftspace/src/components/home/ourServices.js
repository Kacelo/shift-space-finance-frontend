import React from "react";
import { Grid, Image } from "semantic-ui-react";

const OurServices = () => (
  <Grid divided="vertically"  stackable={true}>
    <Grid.Row columns={3}>
      
      <Grid.Column>
        <h3>Provide short term loans</h3>
        <p>
          It is a well-known fact that emergencies arise in life at the most
          inopportune moments. And when they do, we want to do whatever we can
          to help our customers get back on their feet as quickly as possible.
          That’s why we offer the best service possible, with the goal of
          getting you back on track in no time at all.
        </p>
      </Grid.Column>
      <Grid.Column>
        <h3>Micro-lending</h3>
        <p>
          Micro-lending If you are in need of fast money and need it fast,
          Mcrolending offers loans at 30% interest rate and always pays on time.
        </p>
      </Grid.Column>
      <Grid.Column>
        <h3>Purchase order financing</h3>
        <p>
          Provide clients with the funds they require when they need it. By
          providing clients with purchase order financing, you can make it
          easier for them to buy goods and services before they are paid. We
          provide access to funds for purchase orders by leveraging our strong
          relationships with suppliers and customers.
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default OurServices;
