import { useEffect , useState} from "react";
import { FiSearch } from "react-icons/fi";
import {DetailsContainer , DishContainer} from './styles'

import { useNavigate, useParams } from "react-router-dom";

import { PiCaretLeftBold } from "react-icons/pi";

import { Header} from '../../components/header'
import { Footer} from '../../components/footer'
import { TextButton} from '../../components/textButton'
import {IngredientsTags} from '../../components/IngredientsTags'
import {AddRemoveOrder} from '../../components/IcludeOrder'

import CamaraoImg from '../../assets/dishImages/Camarao.png'

import { api } from "../../service/api";

 
export function Details(){
    

    const [data,setData] = useState({})

    const navigate = useNavigate();
    const params = useParams();
    
    function handleBack(){

        navigate(-1)
    }



    
    useEffect(() => {

        async function fetchDish(){
          const response =  await api.get(`dishes/${params.id}`);
          setData(response.data);

          console.log(response.data)
    
        }
        fetchDish();
    
      } , [])
    
    return(
        <DetailsContainer>
            <Header>
                <FiSearch/>
            <input type="text"
                placeholder="Busque por pratos ou ingredientes"
            />
            
            </Header>
                { data &&
            <main>
            <TextButton
             title='Voltar'
             icon={PiCaretLeftBold}
             onClick={handleBack}   
            />
              
              <DishContainer>

                <div className='Img'>
                    <img src={data.image} alt="" />
                </div>

                <div className='food-description'>
                    <h1>{data.name}</h1>

                    <p>{data.description}</p>

                    <div className='ingredients'>
                    {data.ingredients &&
                        data.ingredients.map((ingredient , index) => (
                            <IngredientsTags
                            key={String(index)}
                            title={ingredient.name}
                            />
                        ))
                    }

                </div>
                    <AddRemoveOrder price={data.price}/> 
                    
                
                </div>

              </DishContainer>




            </main>
                }

            <Footer/>

        </DetailsContainer>
    )
}