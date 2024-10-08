import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react';
import {AddRemoveOrderContainer,ButtonOrder} from './styles'

import { useNavigate } from 'react-router-dom';

import {useAuth} from '../../hook/auth'






export function AddRemoveOrder({price,handleMyorders}){
    
    const {user} = useAuth();
    let isAdm = user.role === 'admin';
    
    const navigate = useNavigate();

   
    const [AddRemoveDish , setAddRemoveDish] = useState(0);

    function addDish(){
        setAddRemoveDish(prevState => {
             return prevState + 1
             
        })
    }
    function removeDish(){
        setAddRemoveDish(prevState => {
            
            if(prevState < 1){
             setAddRemoveDish(0)
            } 
             
             return prevState - 1
        })
        
       
    }


    return(

        <AddRemoveOrderContainer>
              {
                isAdm? <></> :

                <div className="addRemoveItems">
                    <FiMinus 
                    onClick={removeDish}
                     />
                    <span>{String(AddRemoveDish)}</span>
                    <FiPlus
                    onClick={addDish}
                    />
                </div>
                }

                <div className="IcludeOrderBtn">
                {

                    isAdm ?  <></> : <ButtonOrder onClick={() => {
                        if(AddRemoveDish === 0){
                            return
                        }else{
                            handleMyorders({AddRemoveDish})
                        }
                    }} >Incluir {price}</ButtonOrder> 

                }
                </div>
        </AddRemoveOrderContainer>
    )
}