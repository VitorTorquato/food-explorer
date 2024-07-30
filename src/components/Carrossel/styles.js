import styled from "styled-components";

export const CarrosselContainer = styled.div`
   
   position: relative;
   width: 100%;


   .right-opacity{
    background: linear-gradient(to right , #000A0F 40% , rgba(0, 10, 15, 0.272541) 90%,
    rgba(0, 10, 15, 0) );
         position: absolute;
         height: 100%;
         width: 25rem;
         z-index: 1;
         content: "";
   }
   .left-opacity{
    background: linear-gradient(to left , #000A0F 40% , rgba(0, 10, 15, 0.272541) 90%,
    rgba(0, 10, 15, 0) );
         position: absolute;
         right: 0;
         height: 100%;
         width: 25rem;
         z-index: 1;
         content: "";
   }

`;

