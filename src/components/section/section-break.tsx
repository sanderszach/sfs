import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const SectionBreak:React.FC = () => {
    return(
        <ParallaxBanner
            layers={[
                {
                    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
                    amount: 0.3
                }
            ]}
            style={{
                height: '300px',
            }}
        />
    )
}