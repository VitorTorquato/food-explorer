import { FiSearch,FiX } from 'react-icons/fi'
import {MenuContainer,Header,Search,LogOut, CloseMenu, BtnMenu} from './styles'
import {Footer} from '../footer'

import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../hook/auth'

import { api } from '../../service/api'


export function SideMenu({menuIsOpen, onCloseMenu}){
    const {signOut, user} = useAuth();

    let isAdm = user.role === 'admin';

    const [search , setSearch] = useState("") 
    const [dishes,setDishes] = useState([]);  

    const navigate = useNavigate()


    function handleAddDish(){
        navigate('/add')
    }

    function handleDishClick(id) {
        navigate(`/details/${id}`);
      }

    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishes?name=${search}`)
    
            setDishes(response.data)
           
           
        }

        fetchDish();
    } , [search])

    return(
        <MenuContainer  data-menu-is-open={menuIsOpen}>
            <Header>
                {

                menuIsOpen &&

                <CloseMenu onClick={onCloseMenu}>
                    <FiX/>
                </CloseMenu>
                }
                  <h2>Menu</h2>
            </Header>

            <div className='section'>
                <Search>
                    <FiSearch/>
                    <input type="text"
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={e => setSearch(e.target.value)}
                    />
                
                </Search>

                {search && dishes.length > 0 && (
          <ul className="search-results">
            {dishes.map(dish => (
              <li key={dish.id} onClick={() => handleDishClick(dish.id)}>
                {dish.name}
              </li>
            ))}
          </ul>
        )}

                <LogOut onClick={signOut}>
                     Sair
                 </LogOut>
                { isAdm ?
                    <BtnMenu onClick={handleAddDish}>Novo prato</BtnMenu> : <></>
                    }
            </div>


            <Footer className='footer'/>
        </MenuContainer>
    
    )
}