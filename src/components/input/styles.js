import styled from "styled-components";
import theme from '../../styles/theme'


export const InputContainer = styled.div`

        width: 100%;
        display: flex;
        align-items: center;

        border-radius: 5px;


        background-color: ${theme.COLORS.DARK_900};
        color: ${theme.COLORS.LIGHT_400};

        > input{
            width: 100%;
            height: 4.8rem;
            
          
            padding: 1.2rem 1.4rem;

            background-color:transparent ;
            border: 0;

            color: ${theme.COLORS.LIGHT_100};

            &::placeholder{
                color: ${theme.COLORS.LIGHT_500};
            }
        }

        > svg{
            margin-left: 1.6rem;
        }

`;