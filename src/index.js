import React from 'react'
import { FlexContainer, Wrapper, HorizontalRule } from './UniversalMenu/styles'
import Switch from './UniversalMenu/switch'
import PresentationViews from './UniversalMenu/presentationViews'
import LibrarySection from './UniversalMenu/librarySection'
import StudioSection from './UniversalMenu/studioSection'
import Portals from './UniversalMenu/portals'

export const UniversalMenu = ({
  LIBRARY_URL,
  CURRENT_ORG,
  handleCreateShowroom,
  handleCreateCoverPages,
  toggleLight,
  toggleDark,
  mode,
  accounts,
  switchAccount,
  logout
}) => {
  const redirect = (e, viewText) => {
    e.preventDefault()
    switch (viewText) {
      case 'streaming view':
        // trackItem(e, 'library streaming view', 'Universal dropdown menu')
        return (window.location.href = `${LIBRARY_URL}/${CURRENT_ORG.toLowerCase()}/streaming?sw=true`)
      case 'master view':
        // trackItem(e, 'library master view', 'Universal dropdown menu')
        return (window.location.href = `${LIBRARY_URL}/${CURRENT_ORG.toLowerCase()}/view?sw=true`)
      case 'studio view':
        // trackItem(e, 'library studio-view', 'Universal dropdown menu')
        return (window.location.href = `${LIBRARY_URL}/${CURRENT_ORG.toLowerCase()}/studio-view?sw=true`)
      case 'sharing center':
        // trackItem(e, 'library share-center', 'Universal dropdown menu')
        return (window.location.href = `${LIBRARY_URL}/${CURRENT_ORG.toLowerCase()}/control-panel/share-center?sw=true`)
      case 'master menu':
        // trackItem(e, 'library menu-admin', 'Universal dropdown menu')
        return (window.location.href = `${LIBRARY_URL}/${CURRENT_ORG.toLowerCase()}/control-panel/menu-admin?sw=true`)
      case 'show rooms +':
        return handleCreateShowroom()
      case 'cover pages +':
        return handleCreateCoverPages()
      case 'Create content':
        // this.trackItem(e, 'library create presentation', 'Universal dropdown menu')
        return (window.location.href = `${LIBRARY_URL}/${CURRENT_ORG.toLowerCase()}/control-panel/manage-presentation?sw=true`)
      default:
        break
    }
  }

  //   const trackItem = (e, action, label = 'Top Navigation bar', path) => {
  //     e.preventDefault()
  //     const { ReactGA } = this.props
  //     ReactGA.event({
  //       category: 'Navigation',
  //       action: `Navigate to ${action}`,
  //       label
  //     })
  //     // history.push(path)
  //     if (path && path.includes('/')) history.push(path)
  //   }

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
        <Switch mode={mode} toggleLight={toggleLight} toggleDark={toggleDark} />
        <PresentationViews redirect={redirect} mode={mode} />
        <LibrarySection redirect={redirect} mode={mode} />
        <StudioSection redirect={redirect} mode={mode} />
        <FlexContainer>
          <HorizontalRule redirect={redirect} mode={mode} />
        </FlexContainer>
        <Portals
          accounts={accounts}
          switchAccount={switchAccount}
          mode={mode}
          logout={logout}
        />
      </FlexContainer>
    </Wrapper>
  )
}
