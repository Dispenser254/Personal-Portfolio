// import React from 'react'

import ContactDetails from "./contact";

function MainContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-neutral-200 h-screen">Landing</div>
      <div className="bg-neutral-300 h-screen">Projects</div>
      <div className="bg-neutral-200 h-screen">
        <ContactDetails />
      </div>
    </div>
  );
}

export default MainContent;
