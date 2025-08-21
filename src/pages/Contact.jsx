import React from 'react'
import Subheader from '../components/Subheader/Subheader'
import Footer from '../components/Footer/Footer'
import Location from '../components/Location/Location'
import ContentComponent from '../components/ContentComponent/ContentComponent'

const Contact = () => {
  return (
    <div>
        <Subheader header="Contact Us" />
        <Location />
        <ContentComponent />
        <Footer />
    </div>
  )
}

export default Contact