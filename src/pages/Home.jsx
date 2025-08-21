import React from 'react';
import Header from '../components/Header/Header'
import Courses from '../components/Courses/Courses';
import Facilities from '../components/Facilities/Facilities';
import Cta from '../components/Cta/Cta';
import Testimonials from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <Courses />
        <Facilities />
        <Cta />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home