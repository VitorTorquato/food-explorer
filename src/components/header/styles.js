import styled from "styled-components";

import theme from '../../styles/theme'
import {DEVICE_BREAKPOINTS} from '../../styles/breakPoints'



export const HeaderContainer = styled.header`

        grid-area: header;

        width: 100%;
        height: 10.4rem;
        padding: 2.4rem 8rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3.2rem;

        background-color: ${theme.COLORS.DARK_600};
       
        @media(max-width:${DEVICE_BREAKPOINTS.SM}){
        padding: 1.6rem 2.4rem;
    }

`

export const Search = styled.div`
       
        width: 100%;
        flex: 1;

        background-color: ${theme.COLORS.DARK_900};

        border-radius: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
      

        padding: 0 24px;
        
      
        >input{
            
            
            width: 100%;
            height: 4.8rem;
            padding:0 1.4rem;
            
     
             color: ${theme.COLORS.LIGHT_100};

             background:transparent;
             border: 0;

            outline: none;
            
             &::placeholder{
                color: ${theme.COLORS.LIGHT_500};

            }
       }

       
       @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }

      
`;

export const ButtonContainer = styled.div`
        width: 100%;
        max-width: 22.6rem;
        flex:1;
        flex-wrap: wrap;


        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }
       
`;

export const Menu = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    > svg{
        width: 3.2rem;
        height: 2.4rem;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        display: none;

 
    }

    

`

export const ButtonMobile = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    > svg{
        width: 3.2rem;
        height: 2.4rem;
    }

    > span{
            display: flex;
            align-items: center;
            justify-content:center;

            background-color: ${theme.COLORS.TOMATO_100};
            padding: .2rem;
            border-radius: 50%;

            width: 1.6rem;
            height: 1.6rem;
            position: absolute;
            top: -8px;
            left: 18px;
            font-size: 10px;

            
        }

        @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        display: none;
    }

`

export const LogOut = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;

    > svg{
        width: 3.2rem;
        height: 3.2rem;
    }

    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }

`;









export const LogoImg = styled.div`

        
        background-color: transparent;

        

        display: flex;
        align-items: center;
        justify-content: center;
        gap:1rem;

        >h1{
  
            font-size: 2.4rem;
            font-weight: bold;
            
        }

            

        >img{
            width: 2.6rem;
            height: 3rem;

        

        }
        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
            
            gap: .4rem;

            >h1{
                    font-size: 1.6rem;

                }

                >img{
                    width: 1.6rem;
                    height: 2rem;
                }
    }
    

`;