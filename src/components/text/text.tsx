import styled from 'styled-components'
import {typeface} from '../../theme'

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
    opacity: .5;
    color: ${props => props.color};
    ${typeface}
`
Title.defaultProps = {color:'white'}

export const H1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
`;

export const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
`;

export const H5 = styled.h5`
    font-family: 'Montserrat', sans-serif;
`;