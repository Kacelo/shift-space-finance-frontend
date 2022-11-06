// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import { Button, Divider, Form, Grid, Image } from "semantic-ui-react";
// import MDBNFooter from "../footer/MDBNFooter";
// import MDBNNav from "../home/mbnNav";

// const footerStyle = {
//   position: "absolute",
//   bottom: "0",
//   width: "100%",
// };

// const ContactUs = () => {
//   const [query, setQuery] = useState({
//     name: "",
//     email: "",
//   });
//   // Update inputs value
//   const handleParam = () => (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setQuery((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
//   // Form Submit function
//   const formSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(query).forEach(([key, value]) => {
//       formData.append(key, value);
//     });
//     fetch("https://getform.io/https://getform.io/f/d55deb0c-c88b-4988-b4ac-f88570d48858", {
//       method: "POST",
//       body: formData,
//     }).then(() => setQuery({ name: "", email: "", message: "" }));
//   };
//   return (
//     <>
//       <MDBNNav />
//       <Container>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <Grid divided="vertically" stackable={true}>
//           <Grid.Row textAlign={"center"}>
//             <h1>Get In Touch</h1>
//           </Grid.Row>
//           <Grid.Row columns={2}>
//             <Grid.Column>
//               <div class="container">
//                 <ul className="list-unstyled mb-0">
//                   <li>
//                     <p>+264853454440</p>
//                   </li>
//                   <li>
//                     <a href="mailto:info@m1.com.na">info@m1.com.na</a>
//                   </li>
//                   <li>
//                     <p>www.shiftfinance.m1.com.na</p>
//                   </li>
//                   <li>
//                     <p>Windhoek Namibia</p>
//                   </li>
//                 </ul>
//               </div>
//             </Grid.Column>
//             <Grid.Column>
//               <Form onSubmit={formSubmit}>
//                 <Form.Group widths="equal">
//                   <Form.Input
//                     fluid
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Name"
//                     // className="form-control"
//                     value={query.name}
//                     onChange={handleParam()}
//                   />
//                   <Form.Input
//                     fluid
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="Email"
//                     // className="form-control"
//                     value={query.email}
//                     onChange={handleParam()}
//                   />
//                 </Form.Group>
//                 <Form.TextArea
//                   name="message"
//                   required
//                   placeholder="Message"
//                   // className="form-control"
//                   value={query.message}
//                   onChange={handleParam()}
//                 />
//                 <button type="submit">Send</button>
//               </Form>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Container>
//       <MDBNFooter />
//     </>
//   );
// };
import React from "react";
import { Container } from "react-bootstrap";
import { Divider, Form, Grid, Image } from "semantic-ui-react";
import MDBNFooter from "../footer/MDBNFooter";
import MDBNNav from "../home/mbnNav";

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
          <Form action="https://getform.io/f/d55deb0c-c88b-4988-b4ac-f88570d48858" method="POST">
            <Form.Group widths="equal">
              <Form.Input fluid label="Email" name="email" placeholder="Email Address" />
              <Form.Input fluid label="First name" name="fname" placeholder="First name" />
              <Form.Input fluid label="Last name" name="lname" placeholder="Last name" />
            </Form.Group>
            <Form.TextArea label="Message" name="message" placeholder="Message" />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>
        
      </Grid.Row>
    </Grid>
  </Container>
  <MDBNFooter />

  </>
  
);

// export default ContactUs;


export default ContactUs;
