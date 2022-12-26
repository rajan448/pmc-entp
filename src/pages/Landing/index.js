
import SimpleSlider from "../../components/Slider";
import styled from "styled-components";
import './landing.css';
import {InputBox, TextInput} from "../../components/UIElements/InputBox";
import {Button} from "@mui/material";
import { FeaturedProduct } from "../../components/Products/FeaturedProduct";
import popularProducts from './../../data/popular-products.json';
import contactData from "./../../data/contactInformation.json";

export const Landing = () => {
    //@TODO: fix this
    const enquireNow = () => {
        const element = document.getElementById("contactUs");
        element.scrollIntoView();
    }

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
                      popularProducts.map((item, index) => {
                          return <FeaturedProduct enquireNow={enquireNow} even={index%2 === 0} key={item.id}
                              {...item}
                          ></FeaturedProduct>
                      })
                  }


              </div>
          </section>

        <section className="contact">
            <div className="products-heading">
                <div className="big-heading">Contact Us</div>
            </div>
            <Address/>

        </section>
      </div>
    );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  @media screen and (max-width: 960px) {
      flex-direction: column;
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
    const mailUrl = `mailto:${contactData.emailAddress}`;
    const phoneUrl = `tel:${contactData.contactNumber}`
  return <ContactContainer>
      <AddressContainer>
          <address>
              <h5>Address: </h5>
              <p>{contactData.addressLine1} <br/> {contactData.addressLine2} <br/>
                  {contactData.addressLine3}
              </p>

              <p>M: <a href={phoneUrl}>{contactData.contactNumber}</a></p>
              <p>
                  Email: <a href={mailUrl}>{contactData.emailAddress}</a>
              </p>
          </address>
      </AddressContainer>
    
      <ContactUsFormContainer id="contactUs">
          <InputBox type="text" placeholder="Name"></InputBox>
          <InputBox type="email" placeholder="Email"></InputBox>
          <InputBox type="text" placeholder="Mobile"></InputBox>
          <TextInput name="message" id="message" cols="30" rows="5" placeholder="Enter your message here"></TextInput>
          <Button variant="contained" type="submit">Submit</Button>
      </ContactUsFormContainer>
  </ContactContainer>
}