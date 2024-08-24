import { Form, InputWrapper , SignUpContainer ,LogoImg} from './styles'

import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import LogoSignSignUp from '../../assets/logo.png'

import { api } from '../../service/api.js'

export function SignUp() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const navigate = useNavigate()



  function handleSingUp(event){
    event.preventDefault()

      if(!name ||!email || !password){
        return alert('Favor preencher todos os campos')
      }

      api.post("/user" , { name , email , password})
        .then(() => {
            alert("Usuário cadastrado com sucesso");
            navigate('/')
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Não foi possivel cadastrar o usuário')
            }
        })
  }

  return (
      <SignUpContainer>
        <LogoImg>
          
            <img src={LogoSignSignUp} alt="logo do explorer escito rocket food na frente" />
            <h1>food explorer</h1>
          
        </LogoImg>
        
        <Form>
        <h1>Crie Sua Conta</h1>


          <InputWrapper>
            <label htmlFor="nome">Nome</label>
            <Input
            id='nome'
              placeholder='Exemplo: Maria da Silva'
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
          <label htmlFor="email">E-mail</label>
            <Input
              id='email'
              placeholder='Exemplo: exemplo@exemplo.com.br'
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
          
          title='criar conta'
          onClick={handleSingUp}
          />
        <Link to='/'>Já tenho uma conta</Link>
        </Form>  

        </SignUpContainer>
  )
}

