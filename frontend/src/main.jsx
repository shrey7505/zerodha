import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import { HomePage } from "./landing_page/home/HomePage.jsx";
import { Signup } from "./landing_page/signup/Signup.jsx";
import { AboutPage } from "./landing_page/about/AboutPage.jsx";
import { ProductPage } from "./landing_page/products/ProductPage.jsx";
import { SupportPage } from "./landing_page/support/SupportPage.jsx";
import { PricingPage } from "./landing_page/pricing/PricingPage.jsx";
import { Navbar } from "./landing_page/Navbar.jsx";
import { Footer } from "./landing_page/Footer.jsx";
import { NotFound } from "./landing_page/NotFound.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
