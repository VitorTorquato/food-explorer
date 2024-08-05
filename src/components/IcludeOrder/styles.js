import styled from "styled-components";

export const AddRemoveOrderContainer = styled.div`


    width: 21rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    .IcludeOrderBtn{
        width: 9.6rem;
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