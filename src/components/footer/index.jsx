import {FooterContainer} from './styles'


import LogoSignSignUp from '../../assets/logo.png'

export function Footer(){
    return(

        <FooterContainer>
            <div className='footer-logo'>
                <img src={LogoSignSignUp} alt="logo rocket food" />
                <h1>Food explorer</h1>
            </div>

            <span>© 2023 - Todos os direitos reservados.</span>
        </FooterContainer>
    )
}