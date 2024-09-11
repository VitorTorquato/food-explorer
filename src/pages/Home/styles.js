import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/breakPoints";

export const  HomeContainer = styled.div`

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
                margin: 2.6rem auto;
                
                padding: 1rem;
               
                
        }

        >footer{
                grid-area: footer;
        }

`;


export const Hero = styled.div`
        position: relative;
        display:flex ;
        width: 100%;
        height: 26rem;

        margin-top: 16.4rem;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        

        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
                width: 100%;
                height:18rem;
                
                margin-top: 2rem;

                
        }

        @media(max-width:${DEVICE_BREAKPOINTS.SM}){
                width: 100%;
                height: 12rem;

                margin-top: 2rem;
                
        }
     
      
      

`;

export const HeroImgContainer = styled.figure`
        position: absolute;
        object-fit: cover;
        top: -14rem;
        left: -7rem;

        >img{
                width: 100%;
        }

    

        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
               width: 40rem;

                top: -6.3rem;
                left: -3rem;

                
        }

        @media(max-width:${DEVICE_BREAKPOINTS.SM}){
               width: 22rem;

                top: -1rem;
                left: -3rem;

                
        }

        @media(max-width:${DEVICE_BREAKPOINTS.XS}){
               width: 22rem;

                top: -1.3rem;
                left: -3rem;

                
        }

        @media(max-width:${DEVICE_BREAKPOINTS.XXS}){
               width: 20rem;

                top: -.3rem;
                left: -3rem;

                
        }

       

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
                        text-align: stify;
                }

       
                
            
          
                @media(max-width:${DEVICE_BREAKPOINTS.MD}){
                width:34rem;
                gap: 1rem;

                top: 4rem;
                left: 40rem;

                
          >h1{
                  font-size: 2.4rem;
                  
                }
                
                >p{
                        font-size: 1.6rem;
                }
                
        }    
        
        
        @media(max-width:${DEVICE_BREAKPOINTS.SM}){
                width:18rem;
                gap: 1rem;

                top: 3rem;
                left: 18rem;

                
          >h1{
                  font-size: 1.6rem;
                  
                }
                
                >p{
                        font-size: 1.2rem;
                }
                
        }  

        @media(max-width:${DEVICE_BREAKPOINTS.XS}){
                width:16rem;
                gap: 1rem;

                top: 3rem;
                left: 20rem;

                
          >h1{
                  font-size: 1.4rem;
                  
                }
                
                >p{
                        font-size: 1rem;
                }
                
        }  

        @media(max-width:${DEVICE_BREAKPOINTS.XXS}){
                width:14rem;
                gap: .5rem;

                top: 3rem;
                left: 16rem;

                
          >h1{
                  font-size: 1.2rem;
                  
                }
                
                >p{
                        font-size: .8rem;
                }
                
        }  
        
       
           

      



`;

