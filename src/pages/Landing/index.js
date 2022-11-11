
import SimpleSlider from "../../components/Slider";
import {ProductCard, ProductFigure, ProductsContainer} from "./../../components/Products";
import styled from "styled-components";
import './landing.css';
import {InputBox, TextInput} from "../../components/UIElements/InputBox";
import {Button} from "@mui/material";

export const Landing = () => {
    return (
      <div className="landing">
        <section className="banner">
          <SimpleSlider></SimpleSlider>
        </section>

        <section className="products">
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

        <section className="catalog">
          <div className="products-heading">
            <div className="big-heading">BIG HEADING</div>
          </div>

          <div className="product-section"></div>
        </section>

        <section className="contact">
          <Address/>
        </section>
      </div>
    );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
      flex-direction: column-reverse;
  }
`;


export const AddressContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem;
  flex-direction: column;
  border 1px solid grey;
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
        House No:
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