import React from 'react'
import styled from 'styled-components'
import {P} from '../index'
import { ListItemProps } from './types/list.types'

export const List = styled.ul``
export const ListItem = styled.li<{marker?:string}>`
    ${props => props.marker && `
        list-style: none;
    `}

`

interface OwnProps {data: ListItemProps[]}
export const ListArray:React.FC<OwnProps> = (props) => {
    const {data} = props
    return(
        <List>
            {data.map(x => 
                <ListItem marker={x.marker || undefined} >
                    <P dangerouslySetInnerHTML={{__html: `${x.marker || ``} ${x.text}`}}></P>
                </ListItem>
            )}
        </List>
    )
} 