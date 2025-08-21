import React from 'react'
import TestBox from '../TextBox/TestBox'
import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <section className="header">
        <Navbar />
        <TestBox />
    </section>
  )
}

export default Header