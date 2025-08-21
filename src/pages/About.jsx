import React from 'react'
import Subheader from '../components/Subheader/Subheader'
import AboutUsBox from '../components/AboutUsBox/AboutUsBox'
import Footer from '../components/Footer/Footer'

const About = () => {
  return (
    <div>
        <Subheader header="About Us" />
        <AboutUsBox />
        <Footer />
    </div>
  )
}

export default About