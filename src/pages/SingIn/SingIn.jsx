import {SignInContainer , Form, LogoImg, InputWrapper} from './styles'
import logoSignSinup from '../../assets/logo.png'


import {Input} from '../../components/input'
import {Button} from '../../components/button'



import { Link } from 'react-router-dom'

export function SignIn() {

  return (
      <SignInContainer>


        <LogoImg>
          <img src={logoSignSinup} alt='logo' />
        </LogoImg>
        <Form>
        <h1>Faça Login</h1>


      <InputWrapper>

        <label htmlFor="email">E-mail</label>
        <Input
          id='email'       
          placeholder='Exemplo: exemplo@exemplo.com.br '
          type="email"
        />
      </InputWrapper>  

      <InputWrapper>
      <label htmlFor="password">Senha</label>
        <Input
          id='password'
          placeholder='No mínimo 6 caracteres'
          type="password"
        />
      </InputWrapper>  
        <Button
        
        title='Entrar'
        />

        <Link to='register'>Criar uma conta</Link>
 
        </Form>

    </SignInContainer>
  )
}

