import React from "react";
import styled from 'styled-components';
import { FlexContainer } from './styles';

const Label = styled.label`
    margin-bottom: 0;
    margin-left: 16px;
    cursor: pointer;
`

const Input = styled.input`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    -webkit-appearance: none;
    appearance: none;
    background-color: none;
    cursor: pointer;
    z-index: 1;

    &::before{
        content: "";
        transform: scale(0);
        transition: 120ms transform ease-in-out;
    }

    &:focus {
        background-color: #EB7500;
      }
`

const OuterCircle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    // border: solid 1px rgba(256,256,256,0.5); 
    border: solid 1px #EB7500; 
    position: absolute;
    left: 27px;
    z-index: 0;
`

const RadioButton = (props) => {
    const {label, id, onChange, value, isSelected, name} = props;

    return (
        <FlexContainer vCenter>
            <Input 
                id={id} 
                onChange={onChange} 
                value={value} 
                type="radio" 
                checked={isSelected}
                name='portal' />
                <OuterCircle />
            <Label htmlFor={id}>{label}</Label>
        </FlexContainer>
    );
}

export default RadioButton;
