import React from 'react';
import London from '../../images/london.png';
import Newyork from '../../images/newyork.png';
import Washington from '../../images/washington.png';
import './Campus.css'

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Global Campus</h1>
      <p>Embark on a journey of knowledge across our global campuses.</p>
      <div className="row">
        <div className="campus-col">
          <img src={London} alt="" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src={Newyork} alt="" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={Washington} alt="" />
          <div className="layer">
            <h3>WASHINGTON</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Campus