import {AddDishContainer ,Form ,FileInput,UploadButton,InputWrapper} from './styles'

import { FiSearch , FiUpload  } from "react-icons/fi";
import { PiCaretLeftBold } from "react-icons/pi";



import {Header} from '../../components/header'
import {Footer} from '../../components/footer'
import {TextButton} from '../../components/textButton'
import {Section} from '../../components/section'
import {Input} from '../../components/input'


export function AddDish(){
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
            />
    <Section
        title='Adicionar prato'
    >

     <Form>
        <InputWrapper className='Img-imput-wrapper'>
            
        <label htmlFor="Dish-img">Imagem do prato</label>
        <FileInput id="Dish-img" type="file" />    
        <UploadButton  htmlFor="Dish-img">
            <FiUpload/>
            Imagem do prato
        </UploadButton>

        </InputWrapper>
      
        <InputWrapper>
            
        <label htmlFor="dish-name">nome</label>
        <Input
        id='dish-name'
        placeholder='Ex.: Salada Ceasar'
        type='text'
        />
       

        </InputWrapper>
      
        <InputWrapper className='catergory-input-wrapper'>
            
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


     </Form>
    </Section>
        




    </main>

    <footer><Footer/></footer>
    </AddDishContainer>

    )
}