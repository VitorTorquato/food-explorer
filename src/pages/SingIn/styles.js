import styled from "styled-components";
import theme from '../../styles/theme'
import {DEVICE_BREAKPOINTS} from '../../styles/breakPoints'

export const SignInContainer = styled.div`

        height: 100vh;
        display: flex;
        padding: 2rem  9rem 2rem 10rem;
        gap: 12rem;


        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
            flex-direction: column;
            padding: 5rem 4.7rem 5rem 4.7rem;
            gap: 1.6rem;
            align-items: center;
            justify-content: center;

            font-size: 1.4rem;
        }
`;

export const Form = styled.form`
    width: 476px;
 
  
    padding: 6.4rem;
    display: flex;
    flex-wrap: wrap;
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

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
            width: 31.6rem;
            padding: 1rem;

            

            background-color: transparent;

            > h1{
                display: none;
            }
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

        display: flex;
        align-items: center;
        justify-content: center;
        gap:1.8rem;

        >h1{
            font-size: 2.8rem;
            font-weight: bold;
        }

        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
                flex: 0;
                margin: 3.2rem 0;
                h1{
                    font-size: 2.4rem                }

        
        }        

        >img{
            width: 4rem;
            height: 4.2rem;

        

            @media(max-width:${DEVICE_BREAKPOINTS.MD}){
            width: 4.3rem;
            height: 4.3rem;
        }
        }
    }

`;