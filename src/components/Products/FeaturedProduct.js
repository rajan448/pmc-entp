import styled from "styled-components";
import {Button} from "@mui/material";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
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

const ActionContainer = styled.div`
  margin-top: 1rem;
`

export const FeaturedProduct = ({even, imageUrl, name, description}) => {
    return <Container primary={even} className={"featured-product"}>
        <ImageSection>
            <ProductImage src={imageUrl} alt="Plate Stack"/>
        </ImageSection>
        <DescriptionSection>
            <h1>{name}</h1>
            <p>{description}</p>
            <small>Pack Size: Custom <br/> Min Order Quantity: 100</small>
            <ActionContainer className={"buttons"}>
                <Button variant="text" type="submit">View More</Button>
                <Button style={{margin: "1rem"}} variant="outlined" type="submit">Enquire Now</Button>
            </ActionContainer>
        </DescriptionSection>
    </Container>

}