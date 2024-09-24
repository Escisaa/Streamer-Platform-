import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Howitworks from "./component/howItWorks";
import Keyfeatures from "./component/Keyfeatures";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import Footer from "./component/footer";

export default function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <Hero />
      <Howitworks />
      <Keyfeatures />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
