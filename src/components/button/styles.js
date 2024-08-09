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

    position: relative;
  
  
    > span{
            display: flex;
            align-items: center;
            justify-content:center;

            background-color: ${theme.COLORS.TOMATO_400};
            padding: .2rem;
            border-radius: 50%;

            width: 1.6rem;
            height: 1.6rem;
            position: absolute;
            top: 5px;
            left: 81px;
            font-size: 10px;

            
        }

`;