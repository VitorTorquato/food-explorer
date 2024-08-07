import styled from "styled-components";
import theme from '../../styles/theme'


export const ButtonContainer = styled.button`

    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 2.4rem;

    border-radius: 5px;

    background-color: ${theme.COLORS.TOMATO_100};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

`;