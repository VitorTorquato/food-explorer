import { ButtonContainer } from "./styles";




export function Button({ icon:Icon, title , ...rest}){

    return(
        <ButtonContainer
        {...rest}
        type="button"
        >
            {Icon && <Icon size={20}/>}
            {title}

        </ButtonContainer>
    )

}