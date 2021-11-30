import React, {useState} from "react";
import styled from 'styled-components';
import { FlexContainer } from './styles';

const Wrapper = styled(FlexContainer)`
    &:hover{
        cursor: pointer;
        
        label{
            color: #EB7500;
            font-weight: 600;
        }
    }
`

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

    z-index: 1;
    margin: 0;

    &::before{
        content: "";
        transform: scale(0);
        transition: 120ms transform ease-in-out;
    }

    &:focus {
        background-color: #EB7500;
    }

    &:hover{
        cursor: pointer;
    }
`

const OuterCircle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: ${props => props.mode === 'light' ? 'solid 1px rgba(0,0,0,0.4)' : 'solid 1px rgba(256,256,256,0.5)'}; 
    position: absolute;
    left: 26px;
    z-index: 0;
`

const RadioButton = (props) => {
    const {label, id, onChange, value, isSelected, mode} = props;

    const [active, setActive] = useState(false);

    return (
        <Wrapper vCenter mb='3px'>
            <Input 
                id={id} 
                onChange={onChange} 
                value={value} 
                type="radio" 
                checked={isSelected}
                name='portal' />
                <OuterCircle mode={mode} />
            <Label htmlFor={id}>{label}</Label>
        </Wrapper>
    );
}

export default RadioButton;
