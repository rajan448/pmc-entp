import React from 'react'
import styled from 'styled-components'
import {ProductCard, ProductFigure, ProductsContainer} from "../../components/Products";

const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
  padding: 2rem;
  font-size: 3rem;
  text-align: center;
  color: #0bc0dc;
  opacity: 0.6;
  @media screen and (max-width: 960px) {
    text-align: left;
  }
`;

const AboutDescription = styled.div`
  padding: 1rem;
  width: 80%;
  font-size: 1.2rem;
  margin: 0 auto;
  line-height: 2.4;
  letter-spacing: 1.2px;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

export default function About() {
  return (
    <AboutContainer>
        <div>
            <Title className={'title'}>About</Title>
            <AboutDescription>
                PMC Enterprises was established in 1998 as a leading manufacturer and supplier of melamine
                tableware and crockery plates. Our extensive product range covers all your tableware needs, from everyday
                plates and bowls to more specialised items such as serving platters and bowls. Our products are of the
                best quality and are perfect for both commercial and domestic use. We're passionate about offering
                high quality products at competitive prices.
                Whether you're looking for tableware for your home or business, we're confident that we have the perfect solution for you.
            </AboutDescription>

            <section className="products">
                <div className="products-heading">
                    <div className="big-heading">Key People</div>
                </div>
              <ProductsContainer>
                <ProductCard>
                  <ProductFigure>
                      <ProfileImage src="./assets/images/about/ajeet.webp" alt="Mr Ajeet"></ProfileImage>
                  </ProductFigure>
                  <p style={{textAlign: "center"}}>
                    <small>
                        Proprietor
                        <strong> Mr. Ajeet Kumar</strong><br/>
                     <address> @New Delhi </address>
                      Contact: <a href="tel:+919213132677">+919213132677</a>
                    </small>
                  </p>
                </ProductCard>
                <ProductCard>
                <ProductFigure>
                    <ProfileImage src="./assets/images/about/rkm.webp" alt="Mr. Ram Krishna Mahto"></ProfileImage>
                </ProductFigure>
                    <p style={{textAlign: "center"}}>
                        <small>
                            Contact Person
                            <strong> Mr. RamKrishna Mahto</strong><br/>
                            <address> @Guwahati </address>
                            Contact: <a href="tel:+919264142577">+919264142577</a>
                        </small>
                    </p>
                </ProductCard>
              </ProductsContainer>
            </section>

        </div>
    </AboutContainer>
  )
}
