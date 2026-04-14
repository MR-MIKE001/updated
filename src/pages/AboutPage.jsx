import React from 'react'
import AppLayout from '../kayout/AppLayout'
import Intro from '../components/intro/intro'
import WhatIdo from '../components/whatIdo/WhatIdo.jsx'
import HowIwork from '../components/howiwork/HowIwork.jsx'


function AboutPage() {
  return (
   <AppLayout>
    <Intro title="about" description="I’m Micheal A. Ibrahim, a Senior Software Engineer with a strong focus on building scalable, high-performance web applications that solve real-world problems.

My journey into software development started with a simple curiosity — how digital products work and how they can be improved. Over time, that curiosity evolved into a career where I design and build production-grade applications used by real users, not just prototypes."/>
   <WhatIdo/>
   <HowIwork  />
   </AppLayout>
  )
}

export default AboutPage