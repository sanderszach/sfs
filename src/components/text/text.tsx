import styled from 'styled-components'
import {typeface} from '../../theme'

const mediaQuery = (fontSize:number) => `
@media (max-width: 600px){
    font-size: ${fontSize}px;
}`

export const P = styled.p`
    ${typeface}
    line-height: 26px;
    white-space: pre-wrap;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 75px;
    line-height: 75px;
    font-weight: 900;
    color: ${props => props.color};
    ${typeface}
    ${mediaQuery(40)}
`
Title.defaultProps = {color:'#ffffff7a'}

export const H1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    ${mediaQuery(36)}
`;

export const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
`;

export const H5 = styled.h5`
    font-family: 'Montserrat', sans-serif;
`;