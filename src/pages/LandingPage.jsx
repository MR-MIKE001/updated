import { Helmet } from "react-helmet-async";
import Experience from "../components/experience/experience";
import Intro from "../components/intro/intro";
import Portfolio from "../components/portfolio/portfolio";
import Services from "../components/services/services";
import Work from "../components/works/work";
import AppLayout from "../kayout/AppLayout";

function LandingPage() {
  return (
    <AppLayout>
      <Helmet>
        {/* ✅ SEO Title */}
        <title>Home | Micheal A. Ibrahim | Mr Mike Portfolio</title>

        {/* ✅ Meta Tags */}
        <meta
          name="description"
          content="Senior Full Stack Engineer portfolio showcasing scalable web applications, projects, and experience."
        />
        <meta
          name="keywords"
          content="web developer, mobile app developer, backend developer, frontend engineer, full‑stack web developer in Nigeria, full‑stack web and mobile app developer, React and Node.js developer, freelance full‑stack developer, MERN stack developer in Port Harcourt, mobile app and web app development, hire a full‑stack developer, professional web developer portfolio, hire .Net developer, "
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Home | Micheal A. Ibrahim | Mr Mike Portfolio"
        />
        <meta name="google-site-verification" content="olxAOJM57JpyJZTk-stVu8x58PnrtkKB-XQPCOlo2b4" />
        <meta
          property="og:description"
          content="Senior Software Engineer portfolio showcasing projects and experience."
        />
        <meta property="og:image" content="../../src/img/mr-mike.jpeg" />
        <meta
          property="og:url"
          content="https://mr-mike-site.onrender.com/"
        />
        <meta property="og:type" content="website" />

        {/* ✅ Structured Data (VERY IMPORTANT FIX) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Micheal Ibrahim",
            jobTitle: "Senior Software Engineer",
            url: "https://mr-mike-site.onrender.com",
            sameAs: [
              "https://www.linkedin.com/in/micheal-ibrahim-57539937a",
              "https://mr-mike-site.onrender.com"
            ]
          })}
        </script>
      </Helmet>

      <Intro
        title="home"
        description={`I didn’t start out just trying to write code — I started by wanting to build things people actually use and enjoy.

Over the years, that curiosity turned into a career as a Senior Software Engineer, where I’ve worked on everything from simple interfaces to high-traffic, production-grade platforms.

Today, I specialize in building scalable web applications with React and TypeScript, combining clean frontend experiences with solid backend systems in .NET and Node.js.

If you’re looking for someone who can turn your ideas into reliable, user-friendly, and production-ready applications, let’s build something great together.`}
      />

      <Services />
      <Work />
      <Experience />
      <Portfolio />
    </AppLayout>
  );
}

export default LandingPage;