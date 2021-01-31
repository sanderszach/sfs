import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ContentArea, Section } from '../../components'
import { P } from '../../components/text/text'
import { Title } from '../../components/text/text'

export const AboutUs:React.FC = () => {

    useEffect(()=>{
        if(!!document.getElementById('myvid')){
            document.getElementById('myvid')!.style.width = `${getFullWidth()}px`
        }

    })
    return(
        <>
            <VideoOverlay>
            <div style={{textAlign:'center',width: '80%', margin:'auto'}}><Title>About Us</Title></div>
            </VideoOverlay>
            <video id="myvid" loop autoPlay muted style={{  width: '100% !important'}} >
                <source src="/videos/about-us-1.mp4" type="video/mp4"/>
            </video>
            <ContentArea fullHeight={true}>
                <Section>
                    <P>Sample text</P>
                </Section>
            </ContentArea>
        </>
    )
}

const getFullWidth = () => {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

const VideoOverlay = styled.div`
    position: absolute;
    z-index: 99;
    top: 40%;
    left: auto; 
    margin:auto;
    width:100%;
`