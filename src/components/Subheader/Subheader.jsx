import React from 'react';
import "./Subheader.css";
import Navbar from "../../components/Navbar/Navbar"

const Subheader = ({ header }) => {
  return (
    <section className="sub-header">
      <Navbar />
      <h1>{header}</h1>
    </section>
  );
};
export default Subheader;
