import {HeaderContainer, LogoImg, Search,LogOut,ButtonContainer} from './styles'
import { FiLogOut} from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import {Button} from '../../components/button'

//import { useNavigate } from 'react-router-dom';

import LogoSignSignUp from '../../assets/logo.png'
import { useState,useEffect } from 'react';




export function Header({children ,orderAmount = 0}){

    const [orderAmountLabel , setOrderAmountLabel] = useState(orderAmount)



    useEffect(() => {
        setOrderAmountLabel(orderAmount);
    },[orderAmountLabel] )


    let isAdm = false;

    return(
         <HeaderContainer >
            <LogoImg>
                <img src={LogoSignSignUp} alt="logo Food explorer" />
                <h1>Food explorer</h1>
            </LogoImg>
            <Search>
                {children}
            </Search>
            <ButtonContainer
            
            >
                {
                    isAdm ? <Button>NovoPrato</Button> :
                <Button icon={TfiReceipt}>
                   pedidos
                    <span>{orderAmount}</span>
                  
                </Button>
                }
            </ButtonContainer>
            <LogOut>
                <FiLogOut/>
            </LogOut>

            
         </HeaderContainer>

    )

}