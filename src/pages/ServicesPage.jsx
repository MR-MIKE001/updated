import React from "react";
import { Helmet } from "react-helmet-async";

import Intro from "../components/intro/intro";
import Offer from "../components/offer/Offer";
import SService from "../components/SService/SService";
import AppLayout from "../kayout/AppLayout";


function ServicesPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Micheal Ibrahim",
    jobTitle: "Senior Software Engineer",
    url: "https://mr-mike-site.onrender.com",
    sameAs: [
      "https://www.linkedin.com/in/micheal-ibrahim-57539937a",
      "https://mr-mike-site.onrender.com/services",
    ],
  };

  return (
    <AppLayout>
      <Helmet>
        <title>Services | Micheal A. Ibrahim | Mr Mike Portfolio</title>
        <meta
          name="description"
          content="I offer a range of services including web development, mobile app development, and UI/UX design. My goal is to deliver high-quality solutions that meet your business needs and exceed your expectations."
        />
        <meta
          name="keywords"
          content="web development, frontend engineer, backend engineer, mobile app development, UI/UX design, custom web application development services, mobile app development services in Nigeria, ecommerce website and app development, API and backend development (Node.js / .NET), responsive website design and UI/UX, maintenance and support for web applications, business website development for SMEs in Nigeria, MVP development for startups"
        />

        <meta
          property="og:title"
          content="Services | Micheal A. Ibrahim | Mr Mike Portfolio"
        />
        <meta
          property="og:description"
          content="I offer a range of services including web development, mobile app development, and UI/UX design. My goal is to deliver high-quality solutions that meet your business needs and exceed your expectations."
        />
        <meta property="og:image" content="../../src/img/mr-mike.jpeg" />
        <meta
          property="og:url"
          content="https://mr-mike-site.onrender.com/services"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <Intro
        title="Web And Mobile App Development Services"
        description="I offer a range of services including web development, mobile app development, and UI/UX design. My goal is to deliver high-quality solutions that meet your business needs and exceed your expectations."
      />
      <SService />
      <Offer />
    </AppLayout>
  );
}

export default ServicesPage;