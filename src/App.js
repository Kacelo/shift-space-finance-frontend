import Home from "./components/home/home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsAndConditions from "./components/terms-and-conditions/termsAndConditions";
import PrivacyPolicy from "./components/terms-and-conditions/privacy";
import AboutUs from "./components/about-us/about-us";
import ContactUs from "./components/contact-us/contactUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route exact path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
