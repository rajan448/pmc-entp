import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './slider.css';

class SimpleSlider extends React.Component {
    render() {
        return <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={false}>
                <div>
                    <img src="./assets/images/plain_bowl.webp" alt="Dinner Set" />
                    <div className="legend">
                        <h1>High Quality Dinner Sets</h1>
                    </div>
                </div>
                <div>
                    <img src="./assets/images/cutlery.webp" alt="Dinner Set"/>
                    <div className="legend">
                        <h1>Custom Designed Plates and cutlery</h1>
                    </div>
                </div>
                <div>
                    <img src="./assets/images/bowl-fashion.webp" alt="Dinner Set" />
                    <div className="legend">
                        <h1>
                            Cross India Shipping
                        </h1>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <img src="https://picsum.photos/id/231/150/100" alt="Pic3" />*/}
                {/*    <p className="legend">Image 3</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="https://picsum.photos/id/234/150/100" alt="Pic3" />*/}
                {/*    <p className="legend">Image 3</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="https://picsum.photos/id/238/150/100" alt="Pic3" />*/}
                {/*    <p className="legend">Image 3</p>*/}
                {/*</div>*/}
            </Carousel>
    };
  }

  export default SimpleSlider;