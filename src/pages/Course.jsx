import React from 'react'
import Subheader from '../components/Subheader/Subheader'
import Facilities from '../components/Facilities/Facilities'
import Footer from '../components/Footer/Footer'
import Courses from '../components/Courses/Courses'

const Course = () => {
  return (
    <div>
        <Subheader header="Our Courses" />
        <Courses />
        <Facilities />
        <Footer />
    </div>
  )
}

export default Course;