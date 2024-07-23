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
        background-color: ${theme.COLORS.DARK_100};
        color: ${theme.COLORS.LIGHT_100};
        font-size: 1.6rem;

    }

    body , input{
        font-family: "Roboto", sans-serif;
    }

    button ,a{
        font-family: "Poppins", sans-serif;
        cursor: pointer;

        border: none;
        color: ${theme.COLORS.LIGHT_100};
    }



`;
