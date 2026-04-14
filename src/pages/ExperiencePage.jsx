  
    import Intro from "../components/intro/intro";
import Portfolio from "../components/portfolio/portfolio";
import Professional from "../components/professional/Professional";
import Skills from "../components/skills/Skills";

import AppLayout from "../kayout/AppLayout";
function ExperiencePage() {
  return (
    <AppLayout>
        <Intro title="Experience" description="I have experience working with a variety of technologies and frameworks, including React, Node.js, .Net Express, MongoDB, and more. I have built several projects that demonstrate my ability to create scalable and efficient web applications. My experience includes both front-end and back-end development, allowing me to deliver end-to-end solutions that are robust and user-friendly."/>
        <Professional/>
        <Skills/>
           <Portfolio/>
    </AppLayout>
  )
}

export default ExperiencePage