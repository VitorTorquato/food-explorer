import {CarrosselContainer} from './styles'
import {useKeenSlider} from 'keen-slider/react'



import {DishCard} from '../dishCard'


import CamaraoImg from '../../assets/dishImages/Camarao.png'
import 'keen-slider/keen-slider.min.css'

export function Carrossel(){

    const [sliderRef] = useKeenSlider({
        slides: {
            perView:3,
            spacing:20,
        }
    })


    const Dishs = [
        {
        ID:1,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        ID:2,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        ID:3,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        ID:4,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        ID:5,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
]

return(
    <CarrosselContainer ref={sliderRef} className='keen-slider'>

                    <div className='right-opacity'></div>

                    {
                        Dishs.map(dish =>(
                            <DishCard className='keen-slider__slide'
                            key={dish.ID}
                            dishImg={dish.dishImg}
                            dishName={dish.dishName}
                            description={dish.description}
                            price={dish.price}
                            
                            />
                        ))
                    }
                    <div className='left-opacity'></div>
    </CarrosselContainer>    

)

}