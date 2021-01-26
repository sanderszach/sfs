import React from 'react'
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { P, Section, Title, ListArray,SectionBreak } from '../../components'
import { guidelinesText,guidelinesList,ourStoryText,recommendationsText,recommendationsList } from './home-page.content'

export const HomePage: React.FC = () => {
    return (
        <div>
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
                        amount: 0.2
                    },
                    {
                        children: ParallaxChildrenText('GET OUT THERE AND BE YOURSELF'),
                        amount: 0.5
                    },
                ]}
                style={{
                    height: '100vh',
                }}
                disabled={true}
            />
            <Section title="Our Story" fullHeight={true}>
                <P>{ourStoryText}</P>
            </Section>
            <SectionBreak />
            <Section title="Guidelines">
                <P>{guidelinesText}</P>
                <ListArray data={guidelinesList}/>
            </Section>
            <SectionBreak />
            <Section title="Recommended Activities">
                <P>{recommendationsText}</P>
                <ListArray data={recommendationsList}/>
            </Section>
        </ParallaxProvider>
        </div>
    )
}

const ParallaxChildrenText = (title:string) =>
    <div style={{position:'absolute',inset:'40% auto', margin:'auto', width:'100%'}}>
        <div style={{textAlign:'center',width: '80%', margin:'auto'}}><Title>{title}</Title></div>
    </div>