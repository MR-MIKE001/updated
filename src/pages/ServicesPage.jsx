import Intro from "../components/intro/intro"
import Offer from "../components/offer/Offer"
import SService from "../components/SService/SService"
import AppLayout from "../kayout/AppLayout"

function ServicesPage() {
  return (
    <AppLayout>
           <Intro title="Services" description="I offer a range of services including web development, mobile app development, and UI/UX design. My goal is to deliver high-quality solutions that meet your business needs and exceed your expectations."/>
           <SService/>
           <Offer/>
    </AppLayout>
  )
}

export default ServicesPage