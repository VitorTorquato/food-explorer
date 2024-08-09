import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react';
import {AddRemoveOrderContainer,ButtonOrder} from './styles'

import { useNavigate } from 'react-router-dom';






export function AddRemoveOrder({price,handleMyorders}){
   
    const navigate = useNavigate();

    function handleEditDish(){
        navigate('/editar')
    }
   
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

   let isAdm = false;

    return(

        <AddRemoveOrderContainer>
              <div className="addRemoveItems">
                    <FiMinus 
                    onClick={removeDish}
                     />
                    <span>{String(AddRemoveDish)}</span>
                    <FiPlus
                    onClick={addDish}
                    />
                </div>


                <div className="IcludeOrderBtn">
                {

                    isAdm ?  <ButtonOrder  onClick={() => ({handleEditDish})}>Editar Prato</ButtonOrder> : <ButtonOrder onClick={() => {
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