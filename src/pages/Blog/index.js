import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CatalogContainer = styled.div`
    display: flex;
    height: 110vh;
    justify-content: center;
    align-items: center;
`;

function Catalog(props) {
  return (
    <CatalogContainer><div>Catalog</div></CatalogContainer>
  )
}

Catalog.propTypes = {
    id: PropTypes.string
}

export default Catalog;
