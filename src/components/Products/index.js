import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
  width: 80%;
  margin: 0 auto;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const ProductCard = styled.div`
    padding: 0.5rem;
    margin: 1rem 0.5rem;
    flex: 1;
    min-height: 200px;
    flex-direction: column;
  justify-content: center;
  align-items: center;
    background-color: #f6f6f6;
    border-radius: 1rem;
`;

export const ProductFigure = styled.div`
  background-color: #fff;
  display: block;
  width: 40%;
  border: 1px solid white;
  border-radius: 50%;
  height: 120px;
  margin: 1rem auto;
`;