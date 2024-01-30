// import React from 'react'

import Browser from "./Browser";

function SmallScreen() {
  return Browser() && window.innerWidth < 768;
}

export default SmallScreen;
