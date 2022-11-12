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
`;

const AboutDescription = styled.div`
  padding: 1rem;
  width: 80%;
  font-size: 1.2rem;
  margin: 0 auto;
  line-height: 2.4;
  letter-spacing: 1.2px;
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
                  <ProductFigure></ProductFigure>
                  <p style={{textAlign: "center"}}>
                    Proprietor: Mr. Ajeet Kumar <br/>
                      New Delhi <br/>
                      M: 9213132677
                  </p>
                </ProductCard>
                <ProductCard>
                <ProductFigure></ProductFigure>
                  <p style={{textAlign: "center"}}>
                      Contact Person: Mr. RamKrishna Mahto <br/>
                      Guwahati <br/>
                      M: 9264142577
                  </p>
                </ProductCard>
              </ProductsContainer>
            </section>

        </div>
    </AboutContainer>
  )
}
