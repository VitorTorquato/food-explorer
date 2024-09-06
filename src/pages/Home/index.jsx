import { FiSearch } from "react-icons/fi";
import { HomeContainer ,Hero,HeroImgContainer , HeroText} from "./styles";

import { useState ,useEffect } from "react";

import { Header } from "../../components/header"
import { Section } from "../../components/section"
import {Carrosel } from '../../components/Carrossel'
import {DishCard} from '../../components/dishCard'
import {Footer} from '../../components/footer'


import heroImg from '../../assets/HeroImg.png'

import { api } from "../../service/api";


export function Home(){

  
 
    const [dishes,setDishes] = useState([]);
    const [search , setSearch] = useState("")   
    const [myOrders , setMyOrders] = useState([]);


function handleMyOrders(data){
        setMyOrders([...myOrders,data])
        
}
   




useEffect(() => {
    async function fetchDish(){
        const response = await api.get(`/dishes?name=${search}`)

        setDishes(response.data)
       
       
    }

    
    fetchDish();
}, [search ]);
    return(

        <HomeContainer>   
           <Header 
           orderAmount={myOrders.length}
        


           >
           <FiSearch/>
            <input type="text"
                placeholder="Busque por pratos ou ingredientes"
                onChange={e => setSearch(e.target.value)}
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
            <Carrosel>
                {
                        dishes.filter(dish => dish.category === 'meal').map(dish => (
                            
                                
                            <div key={String(dish.id)} className='keen-slider__slide'>
                                        <DishCard 
                                            key={dish.id}
                                            data={dish}
                                            handleMyOrders={handleMyOrders}
                                        
                                        
                                        
                                        />
                              </div>   
                                
                            
                        ))
                      
                        
                        
                        
                        
                    }
               
               </Carrosel>
                
            </Section>
            
      
            <Section  title='Sobremesas'>
            
               <Carrosel
            
               >     
                {
                        dishes.filter(dish => dish.category === 'desert').map(dish => (
                            <div key={String(dish.id)} className='keen-slider__slide'>
                            <DishCard 
                                key={dish.id}
                                data={dish}
                                handleMyOrders={handleMyOrders}
                               
                            />
                            </div>
                       
                        ))
                      
                        
                        
                        
                        
                    }
               </Carrosel>
            </Section>

            <Section title='Bebidas'>
              <Carrosel >      
                {
                        dishes.filter(dish => dish.category === 'drinks').map(dish => (
                            <div key={String(dish.id)} className='keen-slider__slide'>
                            <DishCard 
                                key={dish.id}
                                data={dish}
                                handleMyOrders={handleMyOrders}
                                
                            />
                    </div>
                        ))
                      
                        
                        
                        
                        
                    }
               </Carrosel>
            </Section>


        </main>

        <footer>
            <Footer/>
        </footer>

    </HomeContainer>    
    )

}

