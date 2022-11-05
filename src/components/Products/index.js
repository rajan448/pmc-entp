import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const ProductCard = styled.div`
    padding: 0.5rem;
    margin: 1rem 0.5rem;
    flex: 1;
    min-height: 400px;
    flex-direction: column;
    background-color: #aac0aa;
    border-radius: 1rem;
`;

export const ProductFigure = styled.div`
    background-color: #060615;
    display: block;
    width: 50%;
    border: 1px solid white;
    border-radius: 50%;
    height: 180px;
    margin: 1rem auto;
`;