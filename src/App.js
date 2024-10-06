import React from "react";
import About from "./components/About";
import Appoinment from "./components/Appoinment";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Counter />
      <Services />
      <Appoinment />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
