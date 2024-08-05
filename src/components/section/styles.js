import styled from "styled-components";

export const SectionContainer = styled.section`

        width: 100%;
     
        background-color:${({theme}) => theme.COLORS.DARK_200};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        margin: 2.4rem 0;
        
        
        

        
        >h2{
                margin-bottom: 2.4rem;
                font-family: 'Poppins' , sans-serif;
                font-size: 3rem;
                line-height: 1.4;
        }
`;