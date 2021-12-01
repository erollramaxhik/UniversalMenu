import React from 'react'
import { SectionHeading, FlexContainer } from './styles'
import ListItem from './listItem'
import SharingCenterIcon from './assets/sharingCenter'
import MasterMenuIcon from './assets/masterMenu'

const list = [
  { text: 'show rooms +', icon: <SharingCenterIcon /> },
  { text: 'cover pages +', icon: <MasterMenuIcon /> }
]

export function StudioSection(props) {
  return (
    <FlexContainer columns mb='20px'>
      <SectionHeading>Studio</SectionHeading>
      {list.map((item, index) => (
        <ListItem
          key={index}
          text={item.text}
          icon={item.icon}
          mode={props.mode}
          onClick={(e) => props.redirect(e, item.text)}
        />
      ))}
    </FlexContainer>
  )
}

export default StudioSection
