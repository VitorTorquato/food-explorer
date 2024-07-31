import { FiSearch } from "react-icons/fi";
import { HomeContainer ,Hero,HeroImgContainer , HeroText} from "./styles";

import { Header } from "../../components/header"
import { Section } from "../../components/section"
import {Carrossel } from '../../components/Carrossel'
import {DishCard} from '../../components/dishCard'
import {Footer} from '../../components/footer'

import heroImg from '../../assets/HeroImg.png'
import CamaraoImg from '../../assets/dishImages/Camarao.png'
import prune from '../../assets/dishImages/prune.png'
import suco from '../../assets/dishImages/suco.png'



export function Home(){


    const Dishs = [
        {
        category: 'meal',
        ID:1,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'meal',
        ID:2,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'meal',
        ID:3,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'meal',
        ID:4,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'meal',
        ID:5,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
      
        {
        category: 'desert',
        ID:6,
        dishImg:prune,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'desert',
        ID:7,
        dishImg:prune,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'desert',
        ID:8,
        dishImg:prune,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'desert',
        ID:8,
        dishImg:prune,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'desert',
        ID:9,
        dishImg:prune,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'drinks',
        ID:10,
        dishImg:suco,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'drinks',
        ID:11,
        dishImg:suco,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'drinks',
        ID:12,
        dishImg:suco,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'drinks',
        ID:13,
        dishImg:suco,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
        {
        category: 'drinks',
        ID:14,
        dishImg:suco,
        dishName:'Spaguetti Gambe',
        description:'Massa fresca com camarões e pesto.',
        price:'R$ 20,99'
    },
]


    
    return(

     <HomeContainer>   
        <Header>
           <FiSearch/>
            <input type="text"
                placeholder="Busque por pratos ou ingredientes"
            />
        </Header>

        <main>

            <Hero>
                <HeroImgContainer>
                    <img src={heroImg} alt="macarrons" />   
                </HeroImgContainer> 


                <HeroText>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </HeroText>
            </Hero>

            <Section 
             title='Refeições'
            >
         
                <Carrossel>
                {
                        Dishs.filter(dish => dish.category === 'meal').map(dish => (
                            <DishCard  className='keen-slider__slide'
                                key={dish.ID}
                                dishImg={dish.dishImg}
                                dishName={dish.dishName}
                                description={dish.description}
                                price={dish.price}

/>
                        ))
                      
                        
                        
                        
                        
                    }
                </Carrossel>
            </Section>


            <Section title='Sobremesas'>
            <Carrossel>
                {
                        Dishs.filter(dish => dish.category === 'desert').map(dish => (
                            <DishCard  className='keen-slider__slide'
                                key={dish.ID}
                                dishImg={dish.dishImg}
                                dishName={dish.dishName}
                                description={dish.description}
                                price={dish.price}

/>
                        ))
                      
                        
                        
                        
                        
                    }
                </Carrossel>
            </Section>

            <Section title='Bebidas'>
            <Carrossel>
                {
                        Dishs.filter(dish => dish.category === 'drinks').map(dish => (
                            <DishCard  className='keen-slider__slide'
                                key={dish.ID}
                                dishImg={dish.dishImg}
                                dishName={dish.dishName}
                                description={dish.description}
                                price={dish.price}

/>
                        ))
                      
                        
                        
                        
                        
                    }
                </Carrossel>
            </Section>
        </main>

        <footer>
            <Footer/>
        </footer>

    </HomeContainer>    
    )

}

