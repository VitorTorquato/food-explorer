import { ButtonContainer } from "./styles";




export function Button({ icon:Icon,children,...rest}){

    return(
        <ButtonContainer
        {...rest}
       
        >
        {Icon && <Icon size={24}/>}
          {children}
            
        </ButtonContainer>
    )

}