import { FiSearch } from "react-icons/fi";
import {DetailsContainer , DishContainer} from './styles'

import { PiCaretLeftBold } from "react-icons/pi";

import { Header} from '../../components/header'
import { Footer} from '../../components/footer'
import { TextButton} from '../../components/textButton'
import {IngredientsTags} from '../../components/IngredientsTags'
import {AddRemoveOrder} from '../../components/IcludeOrder'

import CamaraoImg from '../../assets/dishImages/Camarao.png'
 
export function Details(){
    
    const Dishs = {
        category: 'meal',
        ID:1,
        dishImg:CamaraoImg,
        dishName:'Spaguetti Gambe',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, culpa accusantium nostrum cupiditate, explicabo eligendi id error velit optio iste consequatur. Dolorum excepturi eius illum culpa dolores nostrum magnam animi!',
        price:'R$ 20,99',
        ingredient:['camarao' , 'pesto' , 'spaguetti']
    }

    
    
    
    return(
        <DetailsContainer>
            <Header>
                <FiSearch/>
            <input type="text"
                placeholder="Busque por pratos ou ingredientes"
            />
            
            </Header>
            <main>
            <TextButton
             title='Voltar'
             icon={PiCaretLeftBold}   
            />
              <DishContainer>
              

                <div className='Img'>
                    <img src={Dishs.dishImg} alt="" />
                </div>

                <div className='food-description'>
                    <h1>{Dishs.dishName}</h1>

                    <p>{Dishs.description}</p>

                    <div className='ingredients'>
                    {
                        Dishs.ingredient.map((tag , index) => (
                            <IngredientsTags
                            key={String(index)}
                            title={tag}
                            />
                        ))
                    }

                    </div>


                <AddRemoveOrder/>
                </div>


              </DishContainer>




            </main>

            <Footer/>

        </DetailsContainer>
    )
}