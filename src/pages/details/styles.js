import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/breakPoints";

export const DetailsContainer = styled.div`

        width: 100%;
        height: 100vh;
       


        display: grid;
        grid-template-rows: 104px auto 77px;

        grid-template-areas: 
        "header"
        "content"
        "footer";

        overflow: auto;


        > main{
                grid-area: content;

                width: 100%;
                max-width: 1122px;
                margin: 4.2rem auto 15.5rem;

                @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
                    width: fit-content;
                }
                @media(max-width: ${DEVICE_BREAKPOINTS.SM}){
                    width: 36rem;
                }
                @media(max-width: ${DEVICE_BREAKPOINTS.XS}){
                    width: 30rem;
                }
                
        }

        >footer{
                grid-area: footer;
        }

`;


export const DishContainer = styled.div`

    width: 100%;
    display: flex;
    
    align-items: center;
    gap: 5rem;
    margin: 4.2rem auto 0;


    .food-description{
    
        display: flex;

        width:38rem;
        flex-direction: column;
        gap: 2.4rem;
        
        .ingredients{
            max-width: 100%;

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 1.2rem;
        }

        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
                    width: fit-content;

                }
                @media(max-width: ${DEVICE_BREAKPOINTS.SM}){
                    width: 36rem;
                    align-items: center;
                }
                @media(max-width: ${DEVICE_BREAKPOINTS.XS}){
                    width: 30rem;
                    align-items: center;

                    h1{
                        font-size: 2.4rem;
                    }

                    p{
                        font-size: 1.8rem;
                    }
                }
    }


    .Img{
    
        >img{
        width: 38rem;
        height: 38rem;
        

        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
            width: 30rem;
            height: 30rem;
        } 
        
        @media(max-width:${DEVICE_BREAKPOINTS.SM}){
            width: 24rem;
            height: 24rem;
    }
        }
    }


    @media(max-width:${DEVICE_BREAKPOINTS.SM}){
        flex-direction: column;
    }

 


`;