import { useState } from 'react'

import {SignInContainer , Form, LogoImg, InputWrapper} from './styles'
import LogoSignSignUp from '../../assets/logo.png'


import { Link } from 'react-router-dom'


import {Input} from '../../components/input'
import {Button} from '../../components/button'

import {useAuth} from '../../hook/auth'



export function SignIn() {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const {signIn} = useAuth();



  function handleSingIn(event){
    event.preventDefault();
   
    signIn({email,password})
  }


  return (
      <SignInContainer>


      <LogoImg>
          
          <img src={LogoSignSignUp} alt="logo do explorer escrito rocket food na frente" />
          <h1>food explorer</h1>
        
      </LogoImg>
      
        <Form>
        <h1>Faça Login</h1>


      <InputWrapper>

        <label htmlFor="email">E-mail</label>
        <Input
          id='email'       
          placeholder='Exemplo: exemplo@exemplo.com.br '
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
      </InputWrapper>  

      <InputWrapper>
      <label htmlFor="password">Senha</label>
        <Input
          id='password'
          placeholder='No mínimo 6 caracteres'
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </InputWrapper>  
        <Button
        
        title='Entrar'
        onClick={handleSingIn}
        />

        <Link to='register'>Criar uma conta</Link>
 
        </Form>

    </SignInContainer>
  )
}

