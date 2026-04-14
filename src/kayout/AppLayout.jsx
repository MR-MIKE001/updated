import React from "react";
import Nav from "../components/navbars/nav";
import Contact from "../components/contact/contact";
import Foot from "../components/footer/foot";

function AppLayout({ children }) {
  return (
    <div>
      
      <Nav />
<main>
      {children}
      <Contact />
      </main>
      <Foot />
    </div>
  );
}

export default AppLayout;