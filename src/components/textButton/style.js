import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/breakPoints";

export const TextButtonContainer = styled.button`

        border: none;
        background: transparent;

        
        font-size: 2.4rem;
        color:${({theme}) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins' , sans-serif;
        font-weight: bold;
        
        
        display: flex;
        align-items: center;
        gap: 8px;

        > svg{
                color:${({theme}) => theme.COLORS.LIGHT_300};    
        }


        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
                font-size: 2.4rem;
        }
`;
