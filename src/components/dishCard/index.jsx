import { FiHeart,FiEdit} from "react-icons/fi";
import {DishCardContainer,DishImg,MarkDownOrEditBtn,DishDescriptionContainer } from './styled'
import {AddRemoveOrder} from '../../components/IcludeOrder'

import { useNavigate } from "react-router-dom";
import { useState } from "react";



export function DishCard({dishId,dishImg,dishName,description,price,handleMyOrders,...rest}){


    const navigate = useNavigate();

    function handleDishDetails(){
       navigate('/detalhes');
    }
    function handleDishEdit(){
        navigate('/editar');
    }
    
    
    const [active, setActive] = useState(false);
    
    const handleClick = () => {
        setActive(!active);
    };
    
    let isAdm = false;

  

    return(
        <DishCardContainer
        {...rest}
        >
            <MarkDownOrEditBtn>
                {
                    isAdm ? <FiEdit onClick={handleDishEdit}/> : <FiHeart onClick={handleClick}
                    fill={active ? "red" : "none"}
                    color={active ? 'red' : null}
                    /> 
                }
            </MarkDownOrEditBtn>

                <DishDescriptionContainer onClick={handleDishDetails}>
                    <DishImg   >
                    <img src={dishImg} alt="dishImg" />
                    </DishImg>
                    <h1>{dishName}</h1>
                    
                    <p>{description}</p>
                    <span>{price}</span>
                </DishDescriptionContainer>
           
                {
                  isAdm ? <></> : <AddRemoveOrder
                    handleMyorders={handleMyOrders}
                  />
        
                }
        
                
        </DishCardContainer>
    )

}