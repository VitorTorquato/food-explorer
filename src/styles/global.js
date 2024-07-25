import {createGlobalStyle} from 'styled-components';
import theme from './theme'

export default createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    :root{
        font-size: 62.5%;

    }

    body{
        background-color: ${theme.COLORS.DARK_400};
        color: ${theme.COLORS.LIGHT_100};
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;

    }

     input{

        &:focus{
            border: 1px solid ${theme.COLORS.LIGHT_100};
        }
    }

    button ,a{
        font-family: "Poppins", sans-serif;
        cursor: pointer;

        border: none;
        color: ${theme.COLORS.LIGHT_100};

        &:hover{
            filter: brightness(0.9);
        }
    }



`;
