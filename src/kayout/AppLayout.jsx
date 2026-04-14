import React from "react";
import Nav from "../components/navbars/nav";
import Contact from "../components/contact/contact";
import Foot from "../components/footer/foot";

function AppLayout({ children }) {
  return (
    <div>
      <Nav />

      {children}
      <Contact />
      <Foot />
    </div>
  );
}

export default AppLayout;