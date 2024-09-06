import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/breakPoints";

export const CarrosselContainer = styled.div`
   
   position: relative;

     width: 100%;
     overflow: hidden;
    
    
     .keen-slider {
    display: flex;
    width: 80vw;  /* Garante que o slider ocupe o tamanho do container */
    margin: 0 auto;
  
  
    
    @media(max-width:${DEVICE_BREAKPOINTS.MD}){     
            min-width: 20vw;
            margin: 0 auto;

        }

  }

  .keen-slider__slide {
    width: 100%;
  
  }
 

   .right-opacity{
    background: linear-gradient(to right , #000A0F 40% , rgba(0, 10, 15, 0.272541) 90%,
    rgba(0, 10, 15, 0) );
         position: absolute;
         left: 0;
         height: 100%;
         width: 15rem;
         z-index: 1;
         content: "";
   }
   
   .left-opacity{
    background: linear-gradient(to left , #000A0F 40% , rgba(0, 10, 15, 0.272541) 90%,
    rgba(0, 10, 15, 0) );
         position: absolute;
         right: 0;
         height: 100%;
         width: 15rem;
         z-index: 1;
         content: "";
   }

   @media(max-width:${DEVICE_BREAKPOINTS.MD}){     
            .left-opacity,
            .right-opacity{
              display: none;
            }

        }


.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}

.arrow--left {
  left: 5px;
  z-index: 1;
}

.arrow--right {
  left: auto;
  right: 5px;
  z-index: 1;
}

.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}




`;