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
import {SideMenu} from '../../components/MobileMenu'

import { api } from "../../service/api";

 
export function Details(){
    

    const [data,setData] = useState({})

    const navigate = useNavigate();
    const params = useParams();

    
    const [myOrders , setMyOrders] = useState([]);
    const [menuIsOpen , setMenuIsOpen] = useState(false);

    
     
    function handleMyOrders(data){
            setMyOrders([...myOrders,data])
            
    }

    function handleBack(){

        navigate(-1)
    }


     const imageURL = `${api.defaults.baseURL}/files/${data.image}`
    
    useEffect(() => {

        async function fetchDish(){
          const response =  await api.get(`dishes/${params.id}`,{withCredentials:true});
          setData(response.data);

         console.log(response.data)
    
        }
        fetchDish();
    
      } , [])
    
    return(
        <DetailsContainer>
             <SideMenu
             menuIsOpen={menuIsOpen}
             onCloseMenu={() => setMenuIsOpen(false)}
             />
            <Header
                onOpenMenu={() => setMenuIsOpen(true)}
                orderAmount={myOrders.length}
            >
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
                    <img src={imageURL} alt="" />
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
                    <AddRemoveOrder
                     price={data.price}
                     handleMyorders={handleMyOrders}
                    
                     /> 
                    
                
                </div>

              </DishContainer>


            


            </main>
                }

            <Footer/>

        </DetailsContainer>
    )
}