import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {InputBox, TextInput} from "../../components/UIElements/InputBox";
import {Button} from "@mui/material";
import {AddressContainer, ContactUsFormContainer} from "../Landing";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;


export const ContactMethod = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: 1rem;
`;


function ContactUs(props) {
  return (
    <div style={{  backgroundColor: "#f6f6f6"}}>
        <div style={{textAlign: "center"}} className="contact-title">
            <h2>Contact Us</h2>
        </div>

        <ContactUsFormContainer>
            <InputBox type="text" placeholder="Name"></InputBox>
            <InputBox type="email" placeholder="Email"></InputBox>
            <InputBox type="text" placeholder="Mobile"></InputBox>
            <TextInput name="message" id="message" cols="30" rows="5" placeholder="Enter your message here"></TextInput>
            <Button variant="contained" type="submit">Submit</Button>
        </ContactUsFormContainer>

        <div style={{textAlign: "center"}} className="contact-title">
            <h5>Visit Us at:</h5>
        </div>

        <ContactContainer>
            <ContactMethod>
                <AddressContainer>
                    <address>
                        <h5>Address: </h5>
                        <p>H37, sector 4, <br/> Bawana industrial area, New Delhi <br/>
                            Pincode 110073
                        </p>

                        <p>M: <a href="tel:9213132677">9213132677</a></p>
                        <p>
                            Email: <a href="mailto:ajeet@pmcmelamine.com">ajeet@pmcmelamine.com</a>
                        </p>
                    </address>
                </AddressContainer>
            </ContactMethod>
            <ContactMethod>
                <AddressContainer>
                    <address>
                        <h5>Address: </h5>
                        <p>16, North Jalukbari<br/> Guwahati, Kamrup, Assam <br/>
                            Pincode 780014
                        </p>

                        <p>M: <a href="tel:9264142577">9264142577</a></p>
                        <p>
                            Email: <a href="mailto:ajeet@pmcmelamine.com">ajeet@pmcmelamine.com</a>
                        </p>
                    </address>
                </AddressContainer>
            </ContactMethod>
            <ContactMethod>
                Google Map
            </ContactMethod>
        </ContactContainer>
    </div>
  )
}

ContactUs.propTypes = {
    id: PropTypes.string
}

export default ContactUs;
