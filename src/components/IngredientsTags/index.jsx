
import {TagsContainer} from './styles'

export function IngredientsTags({title , ...rest}){
    return(
        <TagsContainer {...rest}>
            {title}
        </TagsContainer>
    )
}