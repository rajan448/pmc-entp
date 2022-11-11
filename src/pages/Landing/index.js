
import SimpleSlider from "../../components/Slider";
import {ProductCard, ProductFigure, ProductsContainer} from "./../../components/Products";
import styled from "styled-components";
import './landing.css';
import {InputBox, TextInput} from "../../components/UIElements/InputBox";
import {Button} from "@mui/material";
import { FeaturedProduct } from "../../components/Products/FeaturedProduct";
// import GoogleMapReact, {} from "google-map-react";
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

//
// const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
// } //


export const Landing = () => {
    return (
      <div className="landing">
        <section className="banner">
          <SimpleSlider></SimpleSlider>
        </section>
          <section className="catalog">
              <div className="products-heading">
                  <div className="big-heading">Our Featured Products</div>
              </div>

              <div className="product-section">
                  {
                      [1,2,3].map((item) => {
                          return <FeaturedProduct even={item%2 === 0} key={item}></FeaturedProduct>
                      })
                  }
              </div>
          </section>

        <section className="products">
            <div className="products-heading">
                <div className="big-heading">Testimonials</div>
            </div>
          <ProductsContainer>
            <ProductCard>
              <ProductFigure></ProductFigure>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus perferendis dolore enim ad labore ipsa, dignissimos ratione velit vero. Voluptas consectetur perspiciatis dolores sint quaerat molestiae nostrum ullam quisquam.</p>
            </ProductCard>
            <ProductCard>
            <ProductFigure></ProductFigure>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus perferendis dolore enim ad labore ipsa, dignissimos ratione velit vero. Voluptas consectetur perspiciatis dolores sint quaerat molestiae nostrum ullam quisquam.</p>
            
            </ProductCard>
            <ProductCard>
              <ProductFigure></ProductFigure>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus perferendis dolore enim ad labore ipsa, dignissimos ratione velit vero. Voluptas consectetur perspiciatis dolores sint quaerat molestiae nostrum ullam quisquam.</p>
            </ProductCard>
          </ProductsContainer>
        </section>



        <section className="contact">
            <div className="products-heading">
                <div className="big-heading">Contact Us</div>
            </div>
            <Address/>
            <div className="copyright">
                <small>Copyright PMC Enterprises@2022</small>
            </div>
        </section>
      </div>
    );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  @media screen and (max-width: 960px) {
      //flex-direction: column-reverse;
  }
`;


export const AddressContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem;
  flex-direction: column;
`;


export const ContactUsFormContainer = styled.form`
  display: flex;
  flex: 1;
  margin: 1rem;
  flex-direction: column;
`;

const Address = () => {
  return <ContactContainer>
      <AddressContainer>
          <address>
              <h5>Address: </h5>
              <p>H37, sector 4, <br/> Bawana industrial area, New Delhi <br/>
                      Pincode 110073
              </p>

              <p>M: <a href="tel:9213132677">9213132677</a></p>
              <p>
                  Email: <a href="mailto:ajeet@pmcmelamine.com">ajeet@pmcmelamine.com</a>
              </p>
              {/*<Map location={location} zoomLevel={17}/>*/}
          </address>
      </AddressContainer>
    
      <ContactUsFormContainer>
          <InputBox type="text" placeholder="Name"></InputBox>
          <InputBox type="email" placeholder="Email"></InputBox>
          <InputBox type="text" placeholder="Mobile"></InputBox>
          <TextInput name="message" id="message" cols="30" rows="5" placeholder="Enter your message here"></TextInput>
          <Button variant="contained" type="submit">Submit</Button>
      </ContactUsFormContainer>
  </ContactContainer>
}
//
// const Map = ({location, zoomLevel}) => {
//     return <div className="map">
//         <h2 className="map-h2">Come Visit Us At Our Campus</h2>
//
//         <div className="google-map">
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: '' }}
//                 defaultCenter={location}
//                 defaultZoom={zoomLevel}
//             >
//                 <LocationPin
//                     lat={location.lat}
//                     lng={location.lng}
//                     text={location.address}
//                 />
//             </GoogleMapReact>
//         </div>
//     </div>
// }
//
// const LocationPin = ({ text }) => (
//     <div className="pin">
//         <Icon icon={locationIcon} className="pin-icon" />
//         <p className="pin-text">{text}</p>
//     </div>
// )