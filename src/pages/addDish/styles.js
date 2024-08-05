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
        display: flex;
        
        gap: 3.2rem;

        .Img-imput-wrapper{
                width: 50rem;
        }

        .catergory-input-wrapper{
                width: 60rem;
        }

`;

export const FileInput = styled.input`
  display: none;
  
`;

export const UploadButton = styled.label`
            width: 100%;
            height: 4.8rem;
            
          
            padding: 1.2rem 1.4rem;

            background-color:${theme.COLORS.DARK_800};
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
