import React from 'react'
import styled from 'styled-components'
import { ContentArea, P } from '..'
import { colors } from '../../theme'

export const Footer:React.FC = () => {
    return(
        <StyledFooter>
            <ContentArea>
                <FooterItem><P color="white">Enjoy your Saturday!</P></FooterItem>
                {/* <FooterItem><FooterItemLink href="/about-us">About Us</FooterItemLink></FooterItem>
                <FooterItem><FooterItemLink href="/contact-us">Contact Us</FooterItemLink></FooterItem>
                <FooterItem>
                    <IconWrapper><i className="fab fa-instagram"></i></IconWrapper>
                    <IconWrapper><i className="fab fa-facebook"></i></IconWrapper>
                    <IconWrapper><i className="fab fa-twitter"></i></IconWrapper>
                </FooterItem> */}
            </ContentArea>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: ${colors.grey.dark};
    padding: 30px;
`

const FooterItem = styled.div`
    line-height: 40px;
    font-size: large;
    text-align: center;
`

const FooterItemLink = styled.a`
    color: white;
    cursor: pointer;
    &:hover{
        color:white
    }
`

const IconWrapper = styled.span`
    padding: 10px;
    color: white;
`