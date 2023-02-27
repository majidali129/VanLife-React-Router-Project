import React from 'react'
import { Link } from 'react-router-dom';

import bgImg from "../../Assets/about.jpg"
import classes from './About.module.css'


function About() {
    return (
      <div className={classes.about_page_container}>
        <figure>
            <img src={bgImg} className={classes.about_hero_image}  alt='background-img' />
        </figure>
      <div className={classes.about_page_content}>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className={classes.about_page_cta}>
          <h2>Your destination is waiting.<br />Your van is ready.</h2>
          <Link className={classes.link_button} to="/vans">Explore our vans</Link>
      </div>
  </div>
    );
}

export default About