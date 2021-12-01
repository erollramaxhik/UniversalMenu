import React from 'react'
import { FlexContainer, Button, SectionHeading } from './styles'
import RadioButton from './radioButton'

export function Portals(props) {
  return (
    <FlexContainer columns mb='20px' fs='14px'>
      <SectionHeading>Portals</SectionHeading>
      {props.accounts.map((account, index) => (
        <FlexContainer
          onClick={(e) => props.switchAccount(e, account)}
          key={index}
          m='3px 30px'
        >
          <RadioButton
            id={index}
            label={account}
            value={account}
            mode={props.mode}
            onClick={(e) => props.switchAccount(e, account)}
          />
        </FlexContainer>
      ))}
      <Button onClick={(e) => props.logout(e)} mode={props.mode}>Logout</Button>
    </FlexContainer>
  )
}

export default Portals
