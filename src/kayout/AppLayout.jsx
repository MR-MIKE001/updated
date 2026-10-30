import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/navbars/nav";
import Contact from "../components/contact/contact";
import Foot from "../components/footer/foot";

function AppLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>
        {children}
        <Contact />
      </main>
      <Foot />
    </>
  );
}

export default AppLayout;
