import styled from "styled-components";

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
    margin-top: 4.2rem;


    .food-description{
    
        display: flex;

        
        flex-direction: column;
        gap: 2.4rem;
        
        .ingredients{
            display: flex;
            align-items: center;
            gap: 1.2rem;
        }
    }


    .Img{
    
        >img{
        width: 38rem;
        height: 38rem;
        }
    }


`;