import {EditDishContainer ,Form ,FileInput,UploadButton,InputWrapper,BtnSubmit,EditDishBtn } from './styles'

import { useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';

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

export function EditDish(){

    const [name,setName] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState(null);
    
    
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


    const params = useParams();
     

    const navigate = useNavigate();

    function handleBack(){

        navigate(-1)
    }

    async function handleUpdateDish(){
        window.event.preventDefault();


        try{
          

     

            if(image){
                const fileImage = new FormData()

                fileImage.append('image' , image)

                await api.patch(`dishes/image/${params.id}` , fileImage)

            }

            await api.put(`dishes/${params.id}` ,{
                name,
                category,
                price,
                description,
                ingredients
            })

            alert('Prato editado com sucesso!')

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Nao foi possivel editar o prato o prato')
            }
        }
    }


    async function handleDeleteDish(event){
        event.preventDefault()
        const confirm = window.confirm('Deseja realmente deleter esse prato ?');

        if(confirm){
            await api.delete(`/dishes/${params.id}`)
            navigate('/')
        }
    }
    return(
        <EditDishContainer>
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
        title='Editar prato'
    >

     <Form>
   
 
            <div className='first-row-form'>
                <InputWrapper className='img-input'>
                <label htmlFor="Dish-img">
                    
                    </label>
                <FileInput 
                id="Dish-img"
                type="file"
                onChange={e => setImage(e.target.files[0])}
                 />
                <UploadButton  htmlFor="Dish-img">
                    <FiUpload/>
                    {image ? image.name : 'Imagem do prato'}
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
            <EditDishBtn 
            onClick={handleDeleteDish}
            >
                Excluir prato
            </EditDishBtn>

            <BtnSubmit
            onClick={handleUpdateDish}
            >
                 Salvar as alterações
            </BtnSubmit>
            </div>


     </Form>
    </Section>
        




    </main>

    <footer><Footer/></footer>
    </EditDishContainer>

    )
}