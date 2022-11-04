import React from "react";
import { Container, Grid, List } from "semantic-ui-react";
import MDBNFooter from "../footer/MDBNFooter";
import Footer from "../home/footer";
import MDBNNav from "../home/mbnNav";
import Navbar from "../home/navbar";

function TermsAndConditions() {
  return (
    <div>
      <Container>
      <MDBNNav />      </Container>
      <Container>
        <Grid>
          <Grid.Row textAlign="right">
            <h1>Terms and Conditions</h1>
          </Grid.Row>
          <List ordered></List>
          <List ordered>
              <List.Item>
                The Lender must, at every premise where the Lender conducts
                business in respect of micro loan transactions keep available a
                copy of the Rules set by the Minister in Annexure “A”, which
                must be made available to the Borrower for perusal prior to
                entering into a micro loan transaction; and display prominently
                a copy of the Lender’s registration certificate issued by the
                Registrar.
              </List.Item>
              <List.Item>
                The Lender must use standard written agreements, as approved by
                the Registrar, containing all the terms and conditions of a
                micro loan transaction and clearly reflecting the rights and
                obligations of the Borrower and the Lender.
              </List.Item>
              <List.Item>
                The Lender must, before the conclusion of a micro loan
                transaction and the conclusion of the agreement, provide the
                Borrower with a schedule setting out-
                <List ordered>
                  <List.Item>the loan amount in Namibian Dollars and cents;</List.Item>
                  <List.Item>
                    the total amount repayable in Namibia Dollars and cents, at
                    the then current interest rate, over the repayment period;
                  </List.Item>
                  <List.Item>
                    the amount of finance charges in Namibia Dollars and cents,
                    at the then current interest rate, over the repayment period
                    and the elements comprising the finance charges;
                  </List.Item>
                  <List.Item>
                    the annual finance charges rate, whether this is fixed or
                    variable, and, if variable, how it may vary;
                  </List.Item>
                  <List.Item>
                    the nature and amount of any insurance, including the name
                    of the insurer and the amount of the premiums payable;
                  </List.Item>
                  <List.Item>
                    the penalty interest and any additional costs that would
                    become payable in the case of default by the Borrower or how
                    that would be calculated;
                  </List.Item>
                  <List.Item>
                    the installment amount in Namibia Dollars and cents, at the
                    current interest rate, and the number of installments: and
                  </List.Item>
                  <List.Item>
                    the repayable period in respect of the micro loan
                    transaction.
                  </List.Item>
                </List>
              </List.Item>

              <List.Item>
                the Lender must before the conclusion of a micro loan
                transaction.
                <List ordered>
                  <List.Item>
                    explain to the borrower in a language which the borrower
                    understands (if necessary with the assistance of an
                    interpreter) the essential terms of the micro loan agreement
                    so as to ensure that the meaning and consequences of the
                    agreement is understood; and
                  </List.Item>
                  <List.Item>
                    allow the borrower an opportunity to read the agreement, or
                    have it read to the borrower in the case where the borrower
                    is illiterate; and
                  </List.Item>
                  <List.Item>
                    provide the borrower with a copy of the signed micro loan
                    agreement before or at the time of advancing the loan amount
                    and, if applicable, a copy of the insurance contract
                    pertaining to the micro loan transactions.
                  </List.Item>
                </List>
              </List.Item>

              <List.Item>
                The Lender must, at the request of the Borrower, provide the
                Borrower with a statement setting out all the charges levied,
                all the payments made and the balance outstanding, and may levy
                a charge for the provision of a duplicate copy of the statement
                but in no case may the charge exceed N$ 2.00 per page of the
                statement.
              </List.Item>
            </List>
        </Grid>
      </Container>
      <MDBNFooter/>

    </div>
  );
}

export default TermsAndConditions;
