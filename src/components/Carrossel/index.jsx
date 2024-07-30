import {CarrosselContainer } from './styles'
import {useKeenSlider} from 'keen-slider/react'







import 'keen-slider/keen-slider.min.css'

export function Carrossel({children}){

    const [sliderRef] = useKeenSlider({
        slides: {
            perView:3,
            spacing:20,
        }
    })


    

return(
    <CarrosselContainer ref={sliderRef} className='keen-slider'>

                    <div className='right-opacity'></div>
                    
                        {children}
                  
                    <div className='left-opacity'></div>
    </CarrosselContainer>    

)

}