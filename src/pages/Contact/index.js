import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;



function ContactUs(props) {
  return (
    <ContactContainer>


    </ContactContainer>
  )
}

ContactUs.propTypes = {
    id: PropTypes.string
}

export default ContactUs;
