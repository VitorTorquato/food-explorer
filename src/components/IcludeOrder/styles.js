import styled from "styled-components";
import theme from '../../styles/theme'

export const AddRemoveOrderContainer = styled.div`


    max-width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    .IcludeOrderBtn{
        width: 100%;
    }

    .addRemoveItems{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
    >svg{
        width: 1.8rem; 
        height: 1.8rem;
    }

    >span{
        font-size: 2.0rem;
        font-weight: bold;
        line-height: 1.6;
    }
}

`;




export const ButtonOrder = styled.button`

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