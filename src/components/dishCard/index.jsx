import { FiHeart,FiEdit} from "react-icons/fi";
import {DishCardContainer,DishImg,MarkDownOrEditBtn,DishDescriptionContainer } from './styled'
import {AddRemoveOrder} from '../../components/IcludeOrder'

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../service/api";

import { useAuth} from '../../hook/auth';


export function DishCard({data,handleMyOrders,...rest}){

    const{user} = useAuth();

    let isAdm = user.role === 'admin';

    const navigate = useNavigate();

    
    function handleDishEdit(id){
        navigate(`/edit/${id}`);
    }
    
    function handleDishDetails(id){
        navigate(`/details/${id}`);
     }
    const [active, setActive] = useState(false);
    
    const handleClick = () => {
        setActive(!active);
    };
    

    const imageURL = `${api.defaults.baseURL}/files/${data.image}`

    return(
        <DishCardContainer
        {...rest}
        >
            <MarkDownOrEditBtn>
                {
                    isAdm ? <FiEdit onClick={() => handleDishEdit(data.id)}/> : <FiHeart onClick={handleClick}
                    fill={active ? "red" : "none"}
                    color={active ? 'red' : null}
                    /> 
                }
            </MarkDownOrEditBtn>

                <DishDescriptionContainer  onClick={() => handleDishDetails(data.id)}>
                    <DishImg   >
                    <img src={imageURL} alt="dishImg" />
                    </DishImg>
                    <h1>{data.name}</h1>
                    
                    <p>{data.description}</p>
                    <span>{data.price}</span>
                </DishDescriptionContainer>
                {
                  isAdm ? <></> : <AddRemoveOrder
                    handleMyorders={handleMyOrders}
                   
                  />
        
                }
           
        
                
        </DishCardContainer>
    )

}