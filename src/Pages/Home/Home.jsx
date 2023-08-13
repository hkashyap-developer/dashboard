import React from 'react'
import BackgroundImg from "../../Media/Images/home-background.jpg"
import './Home.css'

const Home = () => {

  const heroStyle = {
    backgroundImage: 'url(${BackgroundImg})',
    backgroundColor: '#fafafa'
  }

  return (

    <div className="heroBannerotrBx">
      <div className="heroBnrInrBx" style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <h1>You got the travel plans, we got the travel vans.</h1>
      </div>
    </div>
  )
}

export default Home
