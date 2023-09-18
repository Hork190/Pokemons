import { styled } from "styled-components";

export const Layout = styled.div`
    padding: 24px;
    font-family: sans-serif;
    font-size: 14px;
`

export const Item = styled.div`
    font-weight: bold;
    padding: 8px 14px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    user-select: none;
    width: 90px;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 8px;
    };
    transition: all 0.3s;
    &:hover {
        border: 1px solid rgba(16, 156, 241, 1);
        background-color: rgba(16, 156, 241, 0.3);
        color: 1d1d1d;
        
    }
`