import styled from "styled-components";
import theme from '../../styles/theme'


export const SignUpContainer = styled.div`

        height: 100vh;
        display: flex;
        padding: 2rem  9rem 2rem 10rem;
        gap: 16rem;
`;

export const Form = styled.form`
    width: 476px;
   
  
    padding: 1rem 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 16px;

    gap: 3.2rem;

    background-color: ${theme.COLORS.DARK_700};

    > a{
        text-decoration: none;
        font-size: 1.6rem;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;


    > label{
        font-size: 1.6;
        color: ${theme.COLORS.LIGHT_400};
    }

`;

export const LogoImg = styled.div`

        flex: 1;
        background-color: transparent;

        display: grid;
        place-items: center;

        >img{
            width: 32.4rem;
            height: 4.8rem;
        }
       

`;