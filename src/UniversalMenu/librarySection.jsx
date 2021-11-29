import React from 'react';
import { FlexContainer, SectionHeading, Button } from './styles';
import ListItem from './listItem';
import SharingCenterIcon from './assets/sharingCenter';
import MasterMenuIcon from './assets/masterMenu';

const list = [
    {text: 'sharing center', icon: <SharingCenterIcon />},
    {text: 'master menu', icon: <MasterMenuIcon />},
]

export function LibrarySection(props){
    return(
        <FlexContainer m='20px 0 0 0' columns>
            <SectionHeading>Library</SectionHeading>
            {list.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} mode={props.mode} />
            ))}
            <Button mode={props.mode}>Create content</Button>
        </FlexContainer>
    )
}

export default LibrarySection;
