import { FiSearch } from "react-icons/fi";
import { HomeContainer ,Hero,HeroImgContainer , HeroText} from "./styles";

import { Header } from "../../components/header"
import { Section } from "../../components/section"
import {Carrossel } from '../../components/Carrossel'

import heroImg from '../../assets/HeroImg.png'




export function Home(){





    
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
         
                <Carrossel/>
            </Section>
        </main>

    </HomeContainer>    
    )

}