import styled from "styled-components";

export const SectionContainer = styled.section`

        width: 100%;
        height: 30rem;
        background-color:${({theme}) => theme.COLORS.DARK_200};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        
        
        
        margin-top: 6.4rem;
        
        >h2{
                margin-bottom:3.2rem ;
                font-family: 'Poppins' , sans-serif;
                font-size: 3rem;
                line-height: 1.4;
        }
`;