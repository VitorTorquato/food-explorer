import {ItemsContainer} from './styles'
import {FiPlus , FiX} from 'react-icons/fi'



export function IngredientsItems({isNew,value,onClick,...rest}){

    return(
        <ItemsContainer isNew={isNew}>
            <input 
            value={value}
            type="" 
            readOnly={!isNew}
            {...rest}
            />
            <button 
            onClick={onClick}
            > 
                {
                    isNew ? <FiPlus/> : <FiX/>
                }
            </button>
        </ItemsContainer>
    )



}