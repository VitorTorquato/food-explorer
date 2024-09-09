import styled from "styled-components";
import theme from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from "../../styles/breakPoints";


export const MenuContainer = styled.aside`

background-color: ${theme.COLORS.DARK_400};

width: 100%;
height: 100vh;
    
display: grid;
grid-template-rows: 104px auto 77px;

grid-template-areas: 
"header"
"content"
"footer";

position:absolute;

    
   
    
    > .section{
        grid-area: content;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 auto;
    }
      
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
    z-index: 1;
    &[data-menu-is-open='true']{
        transform: translateX(0);

        
    }
    
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }


    .search-results {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  background-color: none;
  border: none;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
}


    
    `
export const Header = styled.header`   

            display: flex;
            align-items: center;
            gap: 1.2rem;

            background-color: ${theme.COLORS.DARK_600};
            padding: 5.6rem 2.8rem 2.4rem 2.8rem;

            > h2{
                font-size: 2rem;
                
            }

`;

export const Search = styled.div`

        width: 100%;
        height: 4.8rem;
        margin-bottom: 3.2rem;
    

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

`;


export const BtnMenu = styled.button`
  background: none;
  border: none;
  font-size: 2.4rem;
  color: ${theme.COLORS.LIGHT_300};

`

export const CloseMenu = styled(BtnMenu)`

        display: flex;
        align-items: center;
        justify-content: center;
> svg{
        width: 3.2rem;
        height: 2.4rem;
    }

`;

export const LogOut = styled(BtnMenu)`


`