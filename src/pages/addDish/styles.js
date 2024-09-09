import styled from "styled-components";
import theme from '../../styles/theme'
import {DEVICE_BREAKPOINTS} from '../../styles/breakPoints'

export const AddDishContainer = styled.div`

    
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

                @media(max-width:${DEVICE_BREAKPOINTS.MD}){
                        width: 74rem;
                        padding:  0 6rem ;
                }
                @media(max-width:${DEVICE_BREAKPOINTS.SM}){
                        width: 42rem;
                }
                @media(max-width:${DEVICE_BREAKPOINTS.XS}){
                        width: 36rem;
                        padding: 0 4rem;
                }
                @media(max-width:${DEVICE_BREAKPOINTS.XXS}){
                        width: 32rem;
                        padding: 0 2rem;
                }
                
        }

        >footer{
                grid-area: footer;
        }


`
export const Form = styled.form`
   
        position: relative;
        width: 100%;



    > .first-row-form{
        display: flex;
        align-items: center;
        gap: 1.6rem;



        > .img-input{
                width: 35rem;
        }

        > .name-input{
                width: 100%;
        }

        > .catergory-input{
                width: 64rem;
        }


        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        flex-direction: column;
        width: 100%;


        justify-content: center;
        > .img-input{
                width: 100%
        }

        > .name-input{
                width: 100%;
        }

        > .catergory-input{
                width: 100%;
        }

     
    }
    }

    > .second-row-grid{
        display: grid;
        grid-template-columns: 1fr 25rem;
        grid-template-areas: 
        'ingridients price'
        'textarea textarea';
        gap: 1.6rem;
        margin-top: 3.2rem;

        > .ingridiesnts-input{
                grid-area: ingridients;
            

                >.ingridients-tags{
                width:100%;
                
                border-radius: 8px;

                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 1.6rem;

                padding: 6px 8px;
                background-color: ${({theme}) => theme.COLORS.DARK_900};
                }
        }

        > .price-input{
                grid-area: price;
        }


        > .text-area{
                grid-area: textarea;
                width: 100%;
                margin-top: 3.2rem;
                
        }
        @media(max-width:${DEVICE_BREAKPOINTS.MD}){
            display: flex;
            flex-direction: column;
            width: 100%;
    
        }
        
    }

    > .Btn-save-update{
        width: 17.2rem;
        position: absolute;
        right: 0;
        bottom: -80px;
    }


    //media Form component
    @media(max-width:${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        flex-direction: column;
       
        margin: 0 auto;
     
    }
 
    

`;

export const BtnSubmit = styled.button`


    width: 100%;
    height: 4.8rem;

    border-radius: 5px;

    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    @media(max-width:${DEVICE_BREAKPOINTS.SM}){
                      width:100% ;
                      font-size: 1rem;
                      padding: 1rem;
                      
                }
    

`;




export const FileInput = styled.input`
  display: none;
  
`;

export const UploadButton = styled.label`
            width: 100%;
            height: 4.8rem;
            border-radius: 5px;
          
            padding: 1.2rem 1.4rem;

            background-color:${theme.COLORS.DARK_900};
            border: 0;

            color: ${theme.COLORS.LIGHT_100};

            &::placeholder{
                color: ${theme.COLORS.LIGHT_500};
            }
 
  
 
  svg {
        margin-right: 8px;
  }
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;


    > label{
        font-size: 1.6;
        color: ${theme.COLORS.LIGHT_400};
    }

    

   


   

`;
