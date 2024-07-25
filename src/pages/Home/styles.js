import styled from "styled-components";

export const  HomeContainer = styled.div`

        width: 100%;
        height: 100vh;



        display: grid;
        grid-template-rows: 104px auto;

        grid-template-areas: 
        "header"
        "content";

        overflow: hidden;


        > main{
                grid-area: content;

                width: 100%;
                max-width: 1122px;
                margin: 2.6rem auto;
                
        }

`;


export const Hero = styled.div`
        position: relative;
        display:flex ;
        width: 100%;
        height: 26rem;

        margin-top: 16.4rem;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        

       

`;

export const HeroImgContainer = styled.figure`
        position: absolute;
        object-fit: cover;
        top: -14rem;
        left: -7rem;
`;

export const HeroText = styled.div`
          position: absolute;
          right: 10rem;
          bottom: 10rem;
         
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

          >h1{
                  font-family: 'Poppins' , sans-serif;
                  font-size: 4rem;
                  font-weight: 500;
                  
                  line-height: 3rem;
                  
        }

        >p{
                font-family: 'Roboto' , sans-serif;
                font-size: 1.6rem;
                font-weight: 400;
                text-align: justify;
                color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
`;

