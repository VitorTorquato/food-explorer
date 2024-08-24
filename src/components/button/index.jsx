import { ButtonContainer } from "./styles";




export function Button({ icon:Icon,children,title,...rest}){

    return(
        <ButtonContainer
        {...rest}
        >
        {title}
        {Icon && <Icon size={24}/>}
          {children}
            
        </ButtonContainer>
    )

}