import Experience from "../components/experience/experience"
import Intro from "../components/intro/intro"
import Portfolio from "../components/portfolio/portfolio"
import Services from "../components/services/services"
import Work from "../components/works/work"
import AppLayout from "../kayout/AppLayout"

function LandingPage() {
  return (
  
       <AppLayout>
        <Intro title="home" description="I didn’t start out just trying to write code — I started by wanting to build things people actually use and enjoy.
        
        Over the years, that curiosity turned into a career as a Senior Software Engineer, where I’ve worked on everything from simple interfaces to high-traffic, production-grade platforms. Along the way, I realized something important: great products aren’t just about functionality — they’re about clarity, performance, and user experience.
        
        Today, I specialize in building scalable web applications with React and TypeScript, combining clean, intuitive frontend experiences with solid backend systems in .NET and Node.js. Whether it’s a dashboard, a fintech-style platform, or a custom business tool, I focus on making sure it’s not just built — but built right.
        
        I also enjoy teaching and mentoring, helping other developers grow by sharing real-world knowledge and practical skills. For me, it’s not just about shipping code — it’s about creating solutions that last, scale, and make an impact.
        
        If you’re looking for someone who can turn your ideas into reliable, user-friendly, and production-ready applications, let’s build something great together. 🚀
           "/>
      <Services/>
      <Work/>
      <Experience/>
      <Portfolio/>
    </AppLayout>
  )
}

export default LandingPage