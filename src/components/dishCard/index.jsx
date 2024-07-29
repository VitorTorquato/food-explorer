import { FiHeart,FiEdit, FiMinus, FiPlus } from "react-icons/fi";
import {DishCardContainer,DishImg,MarkDownOrEditBtn ,IcludeToMyOrder} from './styled'

import {Button} from '../button'
import { useState } from "react";



export function DishCard({dishId,dishImg,dishName,description,price,...rest}){


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
    
    let isAdm = true;
   
    return(
        <DishCardContainer
        {...rest}
        >
            <MarkDownOrEditBtn>
                {
                    isAdm ? <FiHeart/> : <FiEdit/> 
                }
            </MarkDownOrEditBtn>
            
            <DishImg>
            <img src={dishImg} alt="dishImg" />
            </DishImg>

            <h1>{dishName}</h1>
            
            <p>{description}</p>

            <span>{price}</span>
                
                
            <IcludeToMyOrder>
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
            </IcludeToMyOrder>     
        
        
                
        </DishCardContainer>
    )

}