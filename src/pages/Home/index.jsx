import { FiSearch } from "react-icons/fi";
import { HomeContainer ,Hero,HeroImgContainer , HeroText} from "./styles";

import { Header } from "../../components/header"
import { Section } from "../../components/section"

import heroImg from '../../assets/HeroImg.png'
import CamaraoImg from '../../assets/dishImages/Camarao.png'
import { DishCard } from "../../components/dishCard";


export function Home(){



    const Dishs = [{
        ID:1,
        dishImg:CamaraoImg,
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
                {
                    Dishs.map(dish =>(
                        <DishCard
                            key={dish.ID}
                            dishImg={dish.dishImg}
                            dishName={dish.dishName}
                            description={dish.description}
                            price={dish.price}


                        
                        />
                    ))
                }
                
                
            </Section>
        </main>

    </HomeContainer>    
    )

}