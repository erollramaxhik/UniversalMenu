import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from './styles';
import IconLight from './assets/iconLight';
import IconDark from './assets/iconDark';

const LightButton = styled(FlexContainer)`
    background: ${props => props.mode === 'light' ? '#EB7500' : 'rgba(256,256,256,0.1)'};
    color: ${props => props.mode === 'light' ? 'white' : ''};

    &:hover{
        background: ${props => props.mode === 'light' ? '' : '#EB7500'};
        cursor: pointer;
    }
`

const DarkButton = styled(FlexContainer)`
    background: ${props => props.mode === 'light' ? 'rgba(216,216,216,0.45)' : 'rgba(0,0,0,0.4)'};
    color: ${props => props.mode === 'light' ? 'rgba(0,0,0,0.85)' : '#EB7500'};

    svg{
        fill: ${props => props.mode === 'light' ? 'rgba(0,0,0,0.8)' : '#EB7500'};
    }

    &:hover{
        background: ${props => props.mode === 'light' ? 'black' : ''};
        color: ${props => props.mode === 'light' ? '#EB7500' : ''};
        cursor: pointer;

        svg{
            fill: ${props => props.mode === 'light' ? '#EB7500' : ''};
        }
    }
`

export function Switch(props){
    return(
        <FlexContainer fs='13px' fw='600'>
            <LightButton onClick={props.toggleLight} width='50%' height='40px'vCenter mode={props.mode}>
                <FlexContainer ml='30px' mr='5px'><IconLight mode={props.mode} /></FlexContainer>
                Light
            </LightButton>
            <DarkButton onClick={props.toggleDark} width='50%' height='40px' vCenter mode={props.mode}>
                <FlexContainer ml='30px' mr='5px'><IconDark mode={props.mode} /></FlexContainer>
                Dark
            </DarkButton>
        </FlexContainer>
    )
}

export default Switch;
