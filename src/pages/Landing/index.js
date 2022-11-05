
import SimpleSlider from "../../components/Slider";
import {ProductCard, ProductFigure, ProductsContainer} from "./../../components/Products";
import styled from "styled-components";
import './landing.css';

export const Landing = () => {
    return (
      <div className="landing">
        <section class="banner">
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
  background-color: #aac0aa;
`;


export const ContactUsFormContainer = styled.form`
  display: flex;
  flex: 1;
  margin: 1rem;
  flex-direction: column;
  background-color: #aac0aa;
`;

const Address = () => {
  return <ContactContainer>
      <AddressContainer>
        House No:
      </AddressContainer>
    
      <ContactUsFormContainer>
          <input type="text" placeholder="Name"/>

          <input type="email" placeholder="Email"/>

          <input type="text" placeholder="Mobile" />

          <textarea name="message" id="message" cols="30" rows="10" placeholder="your message here"></textarea>

          <button type="submit">Submit</button>
      </ContactUsFormContainer>



  </ContactContainer>
}