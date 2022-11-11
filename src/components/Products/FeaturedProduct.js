import styled from "styled-components";
import {Button} from "@mui/material";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
  //opacity: 0.1;
  margin: 1rem 0;
  flex-direction: ${props => props.primary ? "row-reverse" : "row"};

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex: 1;
  @media screen and (max-width: 960px) {
    min-height: 160px;
  }
`

export const DescriptionSection = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const ProductImage = styled.img`
 max-height: 100%;
  max-width: 100%;
`;


export const FeaturedProduct = ({even}) => {
    return <Container primary={even} className={"featured-product"}>
        <ImageSection>
            <ProductImage src="./assets/images/plate-stack.webp" alt="Plate Stack"/>
        </ImageSection>
        <DescriptionSection>
            <h1>Dinner Sets</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolores ea, eius eligendi ex facere harum ipsam itaque iusto minima modi placeat quisquam quod repudiandae sed sequi soluta voluptatum. Quod!
            </p>

            <div className={"buttons"}>
                <Button variant="text" type="submit">View More</Button>
                <Button style={{margin: "1rem"}} variant="outlined" type="submit">Enquire Now</Button>
            </div>

        </DescriptionSection>
    </Container>

}