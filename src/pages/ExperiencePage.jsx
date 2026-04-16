import React from "react";
import { Helmet } from "react-helmet-async";

import Intro from "../components/intro/intro";
import Portfolio from "../components/portfolio/portfolio";
import Professional from "../components/professional/Professional";
import Skills from "../components/skills/Skills";

import AppLayout from "../kayout/AppLayout";

function ExperiencePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Micheal Ibrahim",
    jobTitle: "Senior Software Engineer",
    url: "https://mr-mike-site.onrender.com",
    sameAs: [
      "https://www.linkedin.com/in/micheal-ibrahim-57539937a",
      "https://mr-mike-site.onrender.com/experience",
    ],
  };

  return (
    <AppLayout>
      <Helmet>
        <title>Experience | Micheal A. Ibrahim | Mr Mike Portfolio</title>
        <meta
          name="description"
          content="Full stack engineer portfolio showcasing projects and experience."
        />
        <meta
          name="keywords"
          content="web developer, backend engineer, frontend engineer, MERN stack, .NET, React Native, full‑stack developer project portfolio, React and Node.js project experience, enterprise web application development, REST API development and integration, cloud‑hosted web apps (Render, Supabase, etc.), database design with MongoDB and PostgreSQL, real‑time apps, payments, and authentication projects"
        />

        <meta
          property="og:title"
          content="Experience | Micheal A. Ibrahim | Mr Mike Portfolio"
        />
        <meta
          property="og:description"
          content="Senior Software Engineer portfolio showcasing projects and experience."
        />
        <meta property="og:image" content="../../src/img/mr-mike.jpeg" />
        <meta
          property="og:url"
          content="https://mr-mike-site.onrender.com/experience"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <Intro
        title="My Experience"
        description="I have experience working with a variety of technologies and frameworks, including React, Node.js, .NET, Express, MongoDB, and more. I have built several projects that demonstrate my ability to create scalable and efficient web applications. My experience includes both front-end and back-end development, allowing me to deliver end-to-end solutions that are robust and user-friendly."
      />
      <Professional />
      <Skills />
      <Portfolio />
    </AppLayout>
  );
}

export default ExperiencePage;