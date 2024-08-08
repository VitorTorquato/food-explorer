import {TextButtonContainer} from './style'


export function TextButton({icon:Icon,title,...rest}){
    return(
        <TextButtonContainer
        {...rest}
        >
           {Icon && <Icon size={32} />}
           {title}
        </TextButtonContainer>
    )

}