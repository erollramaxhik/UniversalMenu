import styled from 'styled-components';

export const FlexContainer = styled.div`
    text-align: ${props => props.cText ? 'center' : ''};
    color: ${props => props.color ? props.color : ''};
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.columns ? 'column' : 'row'};
    justify-content: ${props => props.hCenter ? 'center' : ''};
    align-items: ${props => props.vCenter ? 'center' : ''};
    margin: ${props => props.m ? props.m : ''};
    margin-top: ${props => props.mt ? props.mt : ''};
    margin-right: ${props => props.mr ? props.mr : ''};
    margin-bottom: ${props => props.mb ? props.mb : ''};
    margin-left: ${props => props.ml ? props.ml : ''};
    padding: ${props => props.p ? props.p : ''};
    padding-top: ${props => props.pt ? props.pt : ''};
    padding-right: ${props => props.pr ? props.pr : ''};
    padding-bottom: ${props => props.pb ? props.pb : ''};
    padding-left: ${props => props.pl ? props.pl : ''};
    height: ${props => props.height};
    width: ${props => props.width};
    position: ${props => props.position};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
    background-color: ${props => props.bg || ''};
    z-index: ${props => props.zIndex};
    font-size: ${props => props.fs};
    font-weight: ${props => props.fw};
    overflow: ${props => props.scroll ? 'auto' : ''};
    }
`

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.75);
    color:${props => props.mode === 'light' ? 'black' : 'white'};
    z-index: 10;
    font-family: raleway;

    h6{
        text-transform: capitalize;
        font-weight: 900;
    }
`

export const SectionHeading = styled.h6`
    opacity: 0.4;
    font-size: 14px;
    text-transform: capitalize;
    margin-left: 30px;
    margin-bottom: 10px;

    &:hover{
        color: #EB7500;
        opacity: 1;
        cursor: pointer;
    }
`

export const Button = styled.button`
    cursor: pointer;
    width: calc(100% - 60px);
    height: 40px;
    background:${props => props.mode === 'light' ? 'rgba(216,216,216,0.3)' : 'rgba(256,256,256,0.05)'}; 
    border-radius: 10px;
    color:${props => props.mode === 'light' ? 'black' : 'white'};
    font-weight: 600;
    font-size: 13px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover{
        background: #EB7500;
        color: white;
    }
`

export const HorizontalRule = styled.hr`
    width: 100%;
    height: 1px;
    background: ${props => props.mode === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(256,256,256,0.2)'}; 
`
