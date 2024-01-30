// import React from 'react'
import { Outlet } from "react-router-dom";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <NavbarHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
