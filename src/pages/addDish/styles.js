import styled from "styled-components";
import theme from '../../styles/theme'

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
                
        }

        >footer{
                grid-area: footer;
        }


`
export const Form = styled.form`
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
    }

    > .second-row-grid{
        display: grid;
        grid-template-columns: 1fr 25rem;
        grid-template-areas: 
        'ingridients price'
        'textarea textarea';
        gap: 1.6rem;

        > .ingridiesnts-input{
                grid-area: ingridients;
        }

        > .price-input{
                grid-area: price;
        }


        > .text-area{
                grid-area: textarea;
                width: 100%;
                height: 30rem;
        }
        
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
    gap: 8px;


    > label{
        font-size: 1.6;
        color: ${theme.COLORS.LIGHT_400};
    }

    

   


   

`;
