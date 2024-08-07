import { FiHeart,FiEdit} from "react-icons/fi";
import {DishCardContainer,DishImg,MarkDownOrEditBtn } from './styled'
import {AddRemoveOrder} from '../../components/IcludeOrder'

import { useNavigate } from "react-router-dom";
import { useState } from "react";



export function DishCard({dishId,dishImg,dishName,description,price,...rest}){


    const navigate = useNavigate();

    function handleDishDetails(){
        navigate('/detalhes');
    }
    
    let isAdm = false;
   
    const [active, setActive] = useState(false);

    const handleClick = () => {
       setActive(!active);
    };
    return(
        <DishCardContainer
        {...rest}
        >
            <MarkDownOrEditBtn>
                {
                    isAdm ? <FiEdit onClick={handleDishDetails}/> : <FiHeart onClick={handleClick}
                    fill={active ? "red" : "none"}/> 
                }
            </MarkDownOrEditBtn>

                    <DishImg>
                    <img src={dishImg} alt="dishImg" />
                    </DishImg>
                    <h1>{dishName}</h1>
                    
                    <p>{description}</p>
                    <span>{price}</span>
                
           
                
                <AddRemoveOrder/>
        
        
                
        </DishCardContainer>
    )

}