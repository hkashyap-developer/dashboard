import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './AdvSlider.css'

import Testimonial1 from './Media/Testimonial-1.png'; 
import Testimonial2 from './Media/Testimonial-2.png'; 
import Testimonial3 from './Media/Testimonial-3.png'; 
import arrowRight from './Media/arrow-right.svg';
import arrowLeft from './Media/arrow-left.svg';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  backgroundImage: `url('${arrowRight}')`, backgroundSize: "cover", width: "40px", height: "40px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) { 
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  backgroundImage: `url('${arrowLeft}')`, backgroundSize: "cover", width: "40px", height: "40px" }}
        onClick={onClick}
      />
    );
  }  
  

const AdvSlider = () => {

    const settings = {
        dots: false,
        buttons:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1008,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ],
    };

  return (
    <div className="slickWrapperCstm">
        <h2>Our Testimonials</h2>
        <Slider {...settings}>
          <div>
            <img src={Testimonial1} className="testMnlImg" alt="Testimonial" />
          </div>
          <div>
            <img src={Testimonial2} className="testMnlImg" alt="Testimonial" />
          </div>
          <div>
            <img src={Testimonial3} className="testMnlImg" alt="Testimonial" />
          </div>
        </Slider>
    </div>
  )
}

export default AdvSlider
