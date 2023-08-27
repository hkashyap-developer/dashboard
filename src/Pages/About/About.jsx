import React from 'react'
import './About.css'
import HeroImage from './Media/about-hero.png'

const About = () => {
  return (
    <div class="abtHero-otrBx">
      <div class="abtHero-inrBx">
        <div class="abtHero-r1">
          <div class="abtHero-col1 abtHero-col">
            <h1>The last app to manage all your important 🔗links.</h1>
            <p>"Introducing our innovative web app that empowers you to effortlessly manage links and create dynamic dashboards. Streamline your link organization by categorizing and tagging URLs."</p>
          </div>
          <div class="abtHero-r2 abtHero-col">
            <img src={HeroImage} className="abtHero-img" alt="About Us Hero Image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
