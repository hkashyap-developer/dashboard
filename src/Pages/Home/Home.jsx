import React from 'react'
import BackgroundImg from "../../Media/Images/home-background.png"
import './Home.css'
import { Link } from 'react-router-dom';

import AdvSlider from '../../Global/AdvSlider/AdvSlider.jsx';

const Home = () => {

  return (

    <div className="heroBannerotrBx">
      <div className="heroBnrInrBx" style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <h1 className="heroHeading">The last app to manage all your important links!  </h1>
        <p className="heroDesc">Digital Dashboard to bring everything at one place</p>
        <button className="heroBtn"><Link to="/about" className="heroBtnLink">Build a Dashboard →</Link></button>
      </div>
      
      <div class="moreIntroWrap">
        <h2 className="homeTagline">Managing 🔗links is no more a mess</h2>
        <Link to="/about"><p className="homeRdMrAbtUs">Read more about how we started →</p></Link>
      </div>

      <AdvSlider />

    </div>
  )
}

export default Home
