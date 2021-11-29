import React from 'react';
import { FlexContainer, SectionHeading } from './styles';
import ListItem from './listItem';
import StreamIcon from './assets/stream';
import MasterIcon from './assets/masterView';
import StudioIcon from './assets/studio';

const list = [
    {text: 'streaming view', icon: <StreamIcon />},
    {text: 'master view', icon: <MasterIcon />},
    {text: 'studio view', icon: <StudioIcon />},
]

export function PresentationViews(props){
    return(
        <FlexContainer m='25px 0 0 0' columns>
            <SectionHeading>presentation views</SectionHeading>
            {list.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} mode={props.mode} />
            ))}
        </FlexContainer>
    )
}

export default PresentationViews;
