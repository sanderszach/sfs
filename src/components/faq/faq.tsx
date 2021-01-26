import React from 'react'
import styled from 'styled-components'
import { P } from '..'
import { typeface } from '../../theme'

interface FaqProps {
    question: string
    answer: string
}

interface OwnProps {
    data: FaqProps[]
}

export const Faq: React.FC<OwnProps> = (props) => {
    return(
        <div>
            {props.data.map(x =>
                <Wrapper>
                    <Parent question={true}>
                        <Left question={true}>Q.</Left>
                        <Right question={true}><P>{x.question}</P></Right>
                    </Parent>
                    <Parent>
                        <Left>A.</Left>
                        <Right><P>{x.answer}</P></Right>
                    </Parent>
                </Wrapper>
            )}
        </div>
    )
}

// TODO: Cleanup styles
const Left = styled.div<{question?:boolean}>`
width: 40px;
float: left;
font-size: 28px;
position: absolute;
top: 50%;
transform: translateY(-50%);
color: ${props => props.question ? `black` : `#afafaf`};
font-weight: bold;
${typeface}
`
const Right = styled.div<{question?:boolean}>`
margin-left: 40px;
${props => props.question && `font-weight:bold`}
`
const Parent = styled.div<{question?:boolean}>`
width: 100%;
margin: auto;
position: relative;
padding: 4px 16px;
border-left: 3px solid ${props => props.question ? `black` : `#afafaf`};
${props => props.question && `background: #f3f3f3`}
}
`
const Wrapper = styled.div`
padding: 16px 0;
`
