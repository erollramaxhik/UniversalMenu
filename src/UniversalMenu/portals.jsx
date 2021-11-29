import React from 'react';
import { FlexContainer, Button, SectionHeading } from './styles';
import RadioButton from './radioButton';

const accounts = ['blacksquad', 'masterwizr', 'core 20', 'Sales and Marketing', 'Design', 'Engineering' ]

export function Portals(props){
    return(
        <FlexContainer mt='20px' mb='20px' columns fs='14px'>
            <SectionHeading>Portals</SectionHeading>
            {accounts.map((account, index) => (
                <FlexContainer m='3px 30px'>
                    <RadioButton id={index} label={account} value={account} />
                </FlexContainer>
            ))}
            <Button mode={props.mode}>Logout</Button>
        </FlexContainer>
    )
}

export default Portals;
