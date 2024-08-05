import styled from "styled-components";

export const CarrosselContainer = styled.div`
   
   position: relative;
   
   
   
      

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

