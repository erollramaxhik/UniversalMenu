import React from 'react'
import { FlexContainer, SectionHeading } from './styles'
import ListItem from './listItem'
import StreamIcon from './assets/stream'
import MasterIcon from './assets/masterView'
import StudioIcon from './assets/studio'

const list = [
  { text: 'streaming view', icon: <StreamIcon /> },
  { text: 'master view', icon: <MasterIcon /> },
  { text: 'studio view', icon: <StudioIcon /> }
]

export function PresentationViews(props) {
  const presentsationRedirect = (viewText) => {
    switch (viewText) {
      case 'streaming view':
        return (window.location.href = `${props.LIBRARY_URL}/${props.CURRENT_ORG}).toLowerCase()}/streaming?sw=true`)
      case 'master view':
        return (window.location.href = `${props.LIBRARY_URL}/${props.CURRENT_ORG}).toLowerCase()}/view?sw=true`)
      case 'studio view':
        return (window.location.href = `${props.LIBRARY_URL}/${props.CURRENT_ORG}).toLowerCase()}/studio-view?sw=true`)
      default:
        break
    }
  }

  return (
    <FlexContainer columns>
      <SectionHeading>presentation views</SectionHeading>
      {list.map((item, index) => (
        <ListItem
          key={index}
          onClick={presentsationRedirect(item.text)}
          text={item.text}
          icon={item.icon}
          mode={props.mode}
        />
      ))}
    </FlexContainer>
  )
}

export default PresentationViews
