import React, { useState } from 'react'
import { FlexContainer, Wrapper, HorizontalRule } from './UniversalMenu/styles'
import Switch from './UniversalMenu/switch'
import PresentationViews from './UniversalMenu/presentationViews'
import LibrarySection from './UniversalMenu/librarySection'
import StudioSection from './UniversalMenu/studioSection'
import Portals from './UniversalMenu/portals'

export const UniversalMenu = (props) => {
  const [mode, switchMode] = useState('light')

  return (
    <Wrapper mode={mode}>
      <FlexContainer
        bg={mode === 'light' ? 'white' : '#1F1F1F'}
        width='18%'
        height='100%'
        position='absolute'
        right='0'
        columns
        scroll
      >
        <FlexContainer m='10px 30px 0px 30px'>
          <h4>Universal Menu</h4>
        </FlexContainer>
        <Switch
          mode={mode}
          toggleLight={props.toggleLight}
          toggleDark={props.toggleDark}
        />
        <PresentationViews mode={mode} />
        <LibrarySection mode={mode} />
        <StudioSection mode={mode} />
        <FlexContainer>
          <HorizontalRule mode={mode} />
        </FlexContainer>
        <Portals mode={mode} />
      </FlexContainer>
    </Wrapper>
  )
}
