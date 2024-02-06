// import React from 'react'

import Footer from "../components/Footer";
import ContactDetails from "./contact";
import LandingPage from "./landing";

function MainContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="h-screen bg-conic-gradient from-orange-800 via-sky-800 to-purple-900"
      >
        {/* <LandingPage /> */}
        landing
      </div>
      <div className="bg-neutral-300 h-screen">Projects</div>
      <div className="bg-neutral-200 h-screen">
        <ContactDetails />
      </div>
      <Footer />
    </div>
  );
}

export default MainContent;
