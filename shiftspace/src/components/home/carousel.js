import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import React from "react";
import { Divider } from "semantic-ui-react";

// import CustomDotGroup from "../components/CustomDotGroup";
const backGroundStyle = {
  backgroundImage: `url(
    "../../assets/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application (1).jpg"
  )`,
};
const Carousel = () => (
  <CarouselProvider
    naturalSlideWidth={90}
    naturalSlideHeight={35}
    totalSlides={3}
  >
    <Slider>
      <Slide index={0}>
        <div className="slide1" style={{ backGroundStyle }}>
        </div>
        <Image
          src={require("../../assets/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application (1).jpg")}
          size={"small"}
          as="a"
          href="http://example.com"
          target="_blank"
        />
        Hey
      </Slide>
      <Slide index={1}>
        {" "}
        <Image
          src={require("../../assets/attractive-stylish-young-dark-skinned-female-beige-shirt-sitting-kitchen-table-using-laptop-calculating-budget-planning-vacations-smiling-happily-self-employed-black-woman-working-from-home.jpg")}
          size={"tiny"}
        />
      </Slide>
      <Slide index={2}>
        {" "}
        <Image src={require("../../assets/ShiftSpace-png.png")} size={"tiny"} />
      </Slide>
      <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    </Slider>
   
  </CarouselProvider>
);

export default Carousel;

// const Carousel = () => {
//   return (
//     <Container style={{ margin: 20 }}>

//     </Container>
//   );
// };

// export default Carousel;
