import {AddDishContainer ,Form ,FileInput,UploadButton,InputWrapper,BtnSubmit } from './styles'

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FiSearch , FiUpload  } from "react-icons/fi";
import { PiCaretLeftBold } from "react-icons/pi";



import {Header} from '../../components/header'
import {Footer} from '../../components/footer'
import {TextButton} from '../../components/textButton'
import {Section} from '../../components/section'
import {Input} from '../../components/input'
import {TextArea} from '../../components/texteArea'
import {IngredientsItems} from '../../components/ingredientsItem'


import { api } from '../../service/api';



export function AddDish(){


    const [name,setName] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');

 

    const [ingredients,setIngredients] = useState([]);
    const[newIngredients,setNewIngredients] = useState('')


    function handleAddIngredients(e){
            e.preventDefault();

            setIngredients(prevState => [...prevState,newIngredients])
            setNewIngredients('')
    }

    function handleRemoveIngredients(deleted){

        window.event.preventDefault();


        setIngredients(prevState => prevState.filter(tag => tag !== deleted))
    }
 

    const navigate = useNavigate();

    function handleBack(){

        navigate(-1)
    }


    async function handleCreateDish(){

        window.event.preventDefault();

        try{
            if(!name || !category || !price || !description)
            alert('Favor informar todos os campos!')


           const response = await api.post('dishes' , {
                name,
                category,
                ingredients,
                price,
                description
            })
            console.log(response)
            alert('prato criado com sucesso!')
            //const {id} = response.data

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Nao foi possivel cadastrar o prato')
            }
        }
    }




    return(
        <AddDishContainer>
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
             onClick={handleBack} 
            />
    <Section
        title='Adicionar prato'
    >

     <Form>
   
 
            <div className='first-row-form'>
                <InputWrapper className='img-input'>
                <label htmlFor="Dish-img">Imagem do prato</label>
                <FileInput id="Dish-img" type="file" />
                <UploadButton  htmlFor="Dish-img">
                    <FiUpload/>
                    Imagem do prato
                </UploadButton>
                </InputWrapper>
                <InputWrapper className='name-input'>
                
                <label htmlFor="dish-name">nome</label>
                <Input
                id='dish-name'
                placeholder='Ex.: Salada Ceasar'
                type='text'
                onChange={e => setName(e.target.value)}
              
                />
                </InputWrapper>
                <InputWrapper className='catergory-input'>
                
                <label htmlFor="dish-category">Categoria</label>
                <Input
                id='dish-category'
                placeholder='Categoria'
                list='category-list'
                onChange={e => setCategory(e.target.value)}
      
                />
                 <datalist id="category-list">
                    <option value="meal"/>
                    <option value="desert"/>
                    <option value="drinks"/>
                </datalist>
                </InputWrapper>
            </div>

           <div className='second-row-grid'>
               <InputWrapper className='ingridiesnts-input'>
               
                <label htmlFor="ingridients">Ingredientes</label>
                <div className='ingridients-tags'>
                {
                    ingredients.map((ingredient,index) => (

                        <IngredientsItems
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredients(ingredient)}
                        />
                        
                    ))

                }

<IngredientsItems 
                isNew
                placeholder='Adicionar'
                onChange={e => setNewIngredients(e.target.value)}
                onClick={handleAddIngredients}
                />
                </div>
                    
     
                </InputWrapper>

                <InputWrapper className='price-input'>
               
                <label htmlFor="price">preço</label>
                <Input
                id='price'
                placeholder='R$ 00,00'
                type='text'
                onChange={e => setPrice(e.target.value)}
                />
                </InputWrapper>

                <InputWrapper className='text-area'>
                <label htmlFor="text_area">Descrição</label>
                <TextArea 
                id='text_area'
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                onChange={e => setDescription(e.target.value)}
                />
                </InputWrapper>

                

               
           </div>

            <div className='Btn-save-update'>
                <BtnSubmit
                onClick={handleCreateDish}
                >
                    Salvar as alterações
                </BtnSubmit>
            </div>


     </Form>
    </Section>
        




    </main>

    <footer><Footer/></footer>
    </AddDishContainer>

    )
}