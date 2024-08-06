import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
    width: 100%;
    height: 17.2rem;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    resize: none;

    border: none;


    border-radius: 8px;
    padding:14px;


    &::placeholder{
            
            color:${({theme}) => theme.COLORS.LIGHT_500} ;
        }

`;