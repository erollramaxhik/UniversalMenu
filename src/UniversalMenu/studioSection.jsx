import React from 'react';
import { SectionHeading, FlexContainer } from './styles';
import ListItem from './listItem';
import SharingCenterIcon from './assets/sharingCenter';
import MasterMenuIcon from './assets/masterMenu';

const list = [
    {text: 'show rooms +', icon: <SharingCenterIcon />},
    {text: 'cover pages +', icon: <MasterMenuIcon />},
]

export function StudioSection(props){
    return(
        <FlexContainer m='10px 0 5px 0' columns>
            <SectionHeading>Studio</SectionHeading>
            {list.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} mode={props.mode} />
            ))}
        </FlexContainer>
    )
}

export default StudioSection;
