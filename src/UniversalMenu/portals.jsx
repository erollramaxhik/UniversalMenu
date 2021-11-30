import React from 'react';
import { FlexContainer, Button, SectionHeading } from './styles';
import RadioButton from './radioButton';

const accounts = ['Blacksquad', 'Masterwizr', 'Sales and Marketing', 'Accounting and Finance', ]

export function Portals(props){
    return(
        <FlexContainer columns mb='20px' fs='14px'>
            <SectionHeading>Portals</SectionHeading>
            {accounts.map((account, index) => (
                <FlexContainer m='3px 30px'>
                    <RadioButton id={index} label={account} value={account} mode={props.mode} />
                </FlexContainer>
            ))}
            <Button mode={props.mode}>Logout</Button>
        </FlexContainer>
    )
}

export default Portals;
