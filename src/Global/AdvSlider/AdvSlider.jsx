import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './AdvSlider.css'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  backgroundImage: "url('https://www.iconpacks.net/icons/2/free-arrow-right-icon-2844-thumb.png')", backgroundSize: "cover", width: "40px", height: "40px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/60/60577.png')", backgroundSize: "cover", width: "40px", height: "40px" }}
        onClick={onClick}
      />
    );
  }  
  

const AdvSlider = () => {

    const settings = {
        dots: true,
        buttons:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <div className="slickWrapperCstm">
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
        </Slider>
    </div>
  )
}

export default AdvSlider
