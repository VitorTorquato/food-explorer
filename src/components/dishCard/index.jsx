import { FiHeart,FiEdit} from "react-icons/fi";
import {DishCardContainer,DishImg,MarkDownOrEditBtn } from './styled'
import {AddRemoveOrder} from '../../components/IcludeOrder'





export function DishCard({dishId,dishImg,dishName,description,price,...rest}){


   
    
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
                
                <AddRemoveOrder/>
        
        
                
        </DishCardContainer>
    )

}