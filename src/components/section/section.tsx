import React from 'react'
import { ContentArea, H1 } from '../index'

interface OwnProps {
    title?:string
    fullHeight?: boolean
}

export const Section:React.FC<OwnProps> = (props) => {
    const {title, fullHeight, children} = props
    return(
        <ContentArea fullHeight={fullHeight}>
            {title && <H1>{title}</H1>}
            {children}
        </ContentArea>
    )
}