import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './slider.css';
import legendData from './../../data/legendData.json';

class SimpleSlider extends React.Component {
    render() {
        return <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
            {
                legendData.map((item, index) => (
                    <div key={index}>
                        <img src={item?.imageUrl} alt="Dinner Set" />
                        <div className="legend">
                            <h1>{item.header}</h1>
                        </div>
                    </div>
                ))
            }
            </Carousel>
    };
  }

  export default SimpleSlider;