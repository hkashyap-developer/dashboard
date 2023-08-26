import React from 'react'
import BackgroundImg from "../../Media/Images/home-background.jpg"
import './Home.css'
import { Link } from 'react-router-dom';

import AdvSlider from '../../Global/AdvSlider/AdvSlider.jsx';

const Home = () => {

  return (

    <div className="heroBannerotrBx">
      <div className="heroBnrInrBx" style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <h1 className="heroHeading">You got the travel plans, we got the travel vans.</h1>
        <p className="heroDesc">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button className="heroBtn"><Link to="/about" className="heroBtnLink">Find your van →</Link></button>
      </div>
      
      <div class="moreIntroWrap">
        <h2 className="homeTagline">Travel 🚢 The World 🌍 With Us</h2>
        <Link to="/about"><p className="homeRdMrAbtUs">Read more about our adventures →</p></Link>
      </div>

      <AdvSlider />

    </div>
  )
}

export default Home
