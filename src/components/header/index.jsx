import {HeaderContainer, LogoImg, Search,ButtonContainer ,LogOut} from './styles'
import { FiLogOut} from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import LogoSignSignUp from '../../assets/logo.png'


import {Button} from '../button'

export function Header({children}){

    let isAdm = true;    
    return(
         <HeaderContainer>
            <LogoImg>
                <img src={LogoSignSignUp} alt="logo Food explorer" />
                <h1>Food explorer</h1>
            </LogoImg>
            <Search>
                {children}
            </Search>
            <ButtonContainer>
            {
                isAdm ? <Button title='Novo prato'/> :  <Button icon={TfiReceipt } title='Pedidos (0)'/>

            }
            
           

            </ButtonContainer>
            <LogOut>
                <FiLogOut/>
            </LogOut>

            
         </HeaderContainer>

    )

}