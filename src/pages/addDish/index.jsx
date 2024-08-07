import {AddDishContainer ,Form ,FileInput,UploadButton,InputWrapper,BtnSubmit } from './styles'

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



export function AddDish(){


    const navigate = useNavigate();

    function handleBack(){

        navigate(-1)
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
                />
                </InputWrapper>
                <InputWrapper className='catergory-input'>
                
                <label htmlFor="dish-category">Categoria</label>
                <Input
                id='dish-category'
                placeholder='Categoria'
                list='category-list'
                />
                 <datalist id="category-list">
                    <option value="Refeição"/>
                    <option value="Sobremesa"/>
                    <option value="Bebida"/>
                </datalist>
                </InputWrapper>
            </div>

           <div className='second-row-grid'>
               <InputWrapper className='ingridiesnts-input'>
               
                <label htmlFor="ingridients">Ingredientes</label>
                <div className='ingridients-tags'>
                <IngredientsItems
                value='alho'
                />
                <IngredientsItems 
                isNew
                placeholder='Adicionar'
                />
                </div>
                    
     
                </InputWrapper>

                <InputWrapper className='price-input'>
               
                <label htmlFor="price">preço</label>
                <Input
                id='price'
                placeholder='R$ 00,00'
                type='text'
                />
                </InputWrapper>

                <InputWrapper className='text-area'>
                <label htmlFor="text_area">Descrição</label>
                <TextArea 
                id='text_area'
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                />
                </InputWrapper>

                

               
           </div>

            <div className='Btn-save-update'>
                <BtnSubmit>
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