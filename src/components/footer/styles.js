import styled from "styled-components";

export const FooterContainer = styled.footer`
        
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.4rem 8rem;

        background-color: ${({theme}) => theme.COLORS.DARK_600};

        .footer-logo{
            display: flex;
            align-items: center;
            gap: 1rem;

            color: ${({theme}) => theme.COLORS.LIGHT_700};
            
            >h1{
                font-size: 2.4rem;

            }
            >img{
                width: 3rem;
                height: 3rem;
                color: ${({theme}) => theme.COLORS.LIGHT_700};
            }
        }
        

        > span{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.LIGHT_200};
        }

`;