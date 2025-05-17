import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import MyWork from "./component/MyWork/MyWork";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Service />
    <MyWork />
    <Contact />
    <Footer />
  </StrictMode>
);
