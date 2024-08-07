import { ButtonContainer } from "./styles";




export function Button({ icon:Icon,Price:price, title ,...rest}){

    return(
        <ButtonContainer
        {...rest}
        type="button"
        >
            {Icon && <Icon size={20}/>}
            {title}
            {price && price}

        </ButtonContainer>
    )

}