import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from './styles'

const Text = styled(FlexContainer)`
  font-size: 14px;
  text-transform: capitalize;
`

const Wrapper = styled(FlexContainer)`
  cursor: pointer;
  padding: 6px 30px;

  svg {
    fill: #c1c3c6;
  }

  &:hover {
    background: ${(props) =>
      props.mode === 'light'
        ? 'rgba(216,216,216,0.3)'
        : 'rgba(256,256,256,0.05)'};

    div {
      color: #eb7500;
      font-weight: 600;
    }
  }
`

export function ListItem(props) {
  return (
    <Wrapper onClick={props.onClick} vCenter mode={props.mode}>
      {props.icon}
      <Text ml='15px' fw='500'>
        {props.text}
      </Text>
    </Wrapper>
  )
}

export default ListItem
