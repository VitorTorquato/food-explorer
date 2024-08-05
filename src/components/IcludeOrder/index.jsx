import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react';
import {AddRemoveOrderContainer} from './styles'

import {Button} from '../../components/button'



export function AddRemoveOrder(){
   
   
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
                    <Button
                    title='incluir'
                    />
                </div>
        </AddRemoveOrderContainer>
    )
}