import React from "react";
import AppLayout from "../kayout/AppLayout";
import Intro from "../components/intro/intro";
import WhatIdo from "../components/whatIdo/WhatIdo.jsx";
import HowIwork from "../components/howiwork/HowIwork.jsx";
import { Helmet } from "react-helmet-async";
import mrmike from "../../src/img/mr-mike.jpeg";

function AboutPage() {
  return (
    <AppLayout>
      <Helmet>
        {/* ✅ Title */}
        <title>About | Micheal A. Ibrahim | Mr Mike Portfolio</title>

        {/* ✅ Meta */}
        <meta
          name="description"
          content="About Micheal Ibrahim, a Senior Software Engineer building scalable and high-performance web applications."
        />
        <meta
          name="keywords"
          content="web developer, senior software engineer, backend engineer, frontend engineer, portfolio"
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="About | Micheal A. Ibrahim | Mr Mike Portfolio"
        />
        <meta
          property="og:description"
          content="Learn more about Micheal Ibrahim, a Senior Software Engineer focused on scalable applications."
        />
        <meta property="og:image" content={mrmike} />
        <meta
          property="og:url"
          content="https://mr-mike-site.onrender.com/about"
        />
        <meta property="og:type" content="website" />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://mr-mike-site.onrender.com/about"
        />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Micheal Ibrahim",
            jobTitle: "Senior Software Engineer",
            url: "https://mr-mike-site.onrender.com/about",
            sameAs: [
              "https://www.linkedin.com/in/micheal-ibrahim-57539937a",
              "https://mr-mike-site.onrender.com/about"
            ]
          })}
        </script>
      </Helmet>

      <Intro
        title="about"
        description={`I’m Micheal A. Ibrahim, a Senior Software Engineer focused on building scalable, high-performance web applications that solve real-world problems.

My journey into software development started with curiosity about how digital products work. Over time, that curiosity evolved into a career where I design and build production-grade applications used by real users.

I focus on delivering clean, efficient, and user-centered solutions that are built to scale and perform reliably.`}
      />

      <WhatIdo />
      <HowIwork />
    </AppLayout>
  );
}

export default AboutPage;