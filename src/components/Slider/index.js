import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './slider.css';

class SimpleSlider extends React.Component {
    render() {
        return <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src="https://picsum.photos/id/237/150/100" alt="Pic1" />
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img src="https://picsum.photos/id/232/150/100" alt="Pic2"/>
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img src="https://picsum.photos/id/236/150/100" alt="Pic3" />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img src="https://picsum.photos/id/231/150/100" alt="Pic3" />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img src="https://picsum.photos/id/234/150/100" alt="Pic3" />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img src="https://picsum.photos/id/238/150/100" alt="Pic3" />
                    <p className="legend">Image 3</p>
                </div>
            </Carousel>
    };
  }

  export default SimpleSlider;