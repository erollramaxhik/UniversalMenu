import React, { useState } from 'react';
import { FlexContainer, Wrapper, HorizontalRule } from './UniversalMenu/styles';
import Switch from './UniversalMenu/switch';
import PresentationViews from './UniversalMenu/presentationViews';
import LibrarySection from './UniversalMenu/librarySection';
import StudioSection from './UniversalMenu/studioSection';
import Portals from './UniversalMenu/portals';

export const UniversalMenu = () => {

    const [mode, switchMode] = useState('light');

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
                <FlexContainer m='30px 30px 15px 30px'>
                    <h6>Universal Menu</h6>
                </FlexContainer>
                <Switch mode={mode} />
                <PresentationViews mode={mode} />
                <LibrarySection mode={mode} />
                <StudioSection mode={mode} />
                <HorizontalRule mode={mode} />
                <Portals mode={mode} />
            </FlexContainer>
        </Wrapper>
    )
}
