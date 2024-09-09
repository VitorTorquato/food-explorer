import {HeaderContainer, LogoImg, Search,LogOut,ButtonContainer,ButtonMobile,Menu} from './styles'
import { FiLogOut} from "react-icons/fi";
import { TfiReceipt,TfiMenu } from "react-icons/tfi";

import {Button} from '../../components/button'

import { useNavigate } from 'react-router-dom';

import LogoSignSignUp from '../../assets/logo.png'
import { useState,useEffect } from 'react';

import {useAuth} from '../../hook/auth'




export function Header({children ,orderAmount = 0,onOpenMenu}){

    const [orderAmountLabel , setOrderAmountLabel] = useState(orderAmount)

    const {signOut, user} = useAuth();

    let isAdm = user.role === 'admin';


    const navigate = useNavigate();

    function handleAddDish(){
       navigate('/add');
    }
    

    useEffect(() => {
        setOrderAmountLabel(orderAmount);
    },[orderAmountLabel] )



    return(
         <HeaderContainer >
            <Menu onClick={onOpenMenu}>
                <TfiMenu/>
            </Menu>

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
                    isAdm ? <Button onClick={handleAddDish}>NovoPrato</Button> :
                <Button icon={TfiReceipt}>
                   pedidos
                    <span>{orderAmount}</span>
                  
                </Button>
                }

            </ButtonContainer>

            <ButtonMobile>
                <TfiReceipt>
                </TfiReceipt>
                    <span>{orderAmount}</span>
                
            </ButtonMobile>
            <LogOut
             onClick={signOut}
             >
                <FiLogOut/>
            </LogOut>

            
         </HeaderContainer>

    )

}