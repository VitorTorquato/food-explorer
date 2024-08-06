import styled from "styled-components";

export const ItemsContainer = styled.div`
         display: flex;
        align-items: center;


        background-color: ${({theme , isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

        color: ${({theme}) =>  theme.COLORS.LIGHT_100};

        border: ${({theme , isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

        border-radius:8px;
        padding:1rem 1.6rem;

        > button{
                display:grid;
                place-items:center;
                border: none;
                background: none;
                font-size:1.2rem;
        }
        
   

      
        > input {
        
            
            flex-grow:1;
           

            color:${({theme}) => theme.COLORS.LIGHT_100} ;

            background: transparent;
            border: none;


            &::placeholder{
                color:${({theme}) => theme.COLORS.LIGHT_500} ;
            }

        }
`;