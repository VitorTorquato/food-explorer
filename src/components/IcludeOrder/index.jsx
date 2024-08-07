import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react';
import {AddRemoveOrderContainer} from './styles'

import { useNavigate } from 'react-router-dom';

import {Button} from '../../components/button'



export function AddRemoveOrder({price}){
   
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

        <AddRemoveOrderContainer >
              <div className="addRemoveItems">
                    <FiMinus 
                    onClick={removeDish}
                     />
                    <span>{AddRemoveDish}</span>
                    <FiPlus
                    onClick={addDish}
                    />
                </div>


                <div className="IcludeOrderBtn">
                {

                    isAdm ? <Button  onClick={handleEditDish} title='Editar prato'/> : <Button title='Incluir ' Price={price}/> 

                }
                </div>
        </AddRemoveOrderContainer>
    )
}