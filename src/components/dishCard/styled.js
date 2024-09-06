import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/breakPoints";

export const DishCardContainer = styled.div`
        position:relative;
        
        min-width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media(max-width:${DEVICE_BREAKPOINTS.MD}){     
            min-width: 40vw;
            margin: 0 auto;

        }

        @media(max-width:${DEVICE_BREAKPOINTS.SM}){     
            min-width: 80vw;
            margin: 0 auto;
        }
         
     
          
        


`;

export const  DishDescriptionContainer = styled.button`
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        
        padding: 2.4rem;

        box-sizing: border-box;



        background: ${({theme}) => theme.COLORS.DARK_200};
        border: none;
        background: none;
        border-radius: 8px;


        color: ${({theme}) => theme.COLORS.LIGHT_300};


        >h1{
            font-family: 'Poppins' , sans-serif;
            font-size: 2.4rem;
            font-weight: bold;
        }
        
        >p{
            font-size: 1.4rem;
            line-height: 1.6;
            font-weight: normal;
        }

        >span{
            font-size: 3.2rem;
            color: ${({theme}) => theme.COLORS.CAKE_200};
            
        }

        @media(max-width:${DEVICE_BREAKPOINTS.SM}){
            >h1{
                font-size: 1.4rem;
            }
            >p{
                display: none;
            }

            >span{
                font-size: 1.6rem;
            }
        }
`;



export const DishImg = styled.div`
 
    > img{
        width: 100%;
        max-width: 100%;
    height: 17.6rem;
    
    overflow: hidden;
    object-fit: cover;


    
}

`;

export const MarkDownOrEditBtn  = styled.button`


width: 100%;
text-align:end;
display: flex;
justify-content: end;
border: none;
background: none;

> svg{
        width:2.4rem;
        height: 2.3rem;

    }
`;


