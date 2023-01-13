import React, {useEffect} from 'react'
import TspAbout from './TspAbout'
import TspConduction from './TspConduction'
import TspContact from './TspContact'
import TspHome from './TspHome'
import TspNavbar from './TspNavbar'
import TspPrize from './TspPrize'
import TspTestimonials from './TspTestimonials'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from './Faq'

function Tsp() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="mainContainer">
      <TspNavbar />
      <TspHome />
      <TspAbout />
      <TspConduction />
      <TspPrize />
      <TspTestimonials />
      <Faq />
      <TspContact />
    </section>
  )
}

export default Tsp
