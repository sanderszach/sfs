import styled from 'styled-components'

export const ContentArea = styled.div<{fullHeight?:boolean}>`
    max-width: 1024px;
    margin: auto;
    padding: 24px;
    ${props => props.fullHeight ? `min-height: 100vh;`:``}
`