import styled from "styled-components";

export const TextButtonContainer = styled.button`

        border: none;
        background: transparent;

        
        font-size: 14px;
        color:${({theme}) => theme.COLORS.LIGHT_300};
        

        display: flex;
        align-items: center;
        gap: 8px;

        > svg{
                color:${({theme}) => theme.COLORS.LIGHT_300};    
        }

`;
