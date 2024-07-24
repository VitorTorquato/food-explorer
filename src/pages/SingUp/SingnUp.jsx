import { Link } from 'react-router-dom'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { Form, InputWrapper , SignUpContainer ,LogoImg} from './styles'
import LogoSignSignUp from '../../assets/logo.png'

export function SignUp() {

  return (
      <SignUpContainer>
        <LogoImg>
          <img src={LogoSignSignUp} alt="logo do explorer escito rocket food na frente" />
        </LogoImg>
        
        <Form>
        <h1>Crie Sua Conta</h1>


          <InputWrapper>
            <label htmlFor="nome">Nome</label>
            <Input
            id='nome'
              placeholder='Exemplo: Maria da Silva'
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
          <label htmlFor="email">E-mail</label>
            <Input
              id='email'
              placeholder='Exemplo: exemplo@exemplo.com.br'
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
          
          title='criar conta'
          />
        <Link to='/'>Já tenho uma conta</Link>
        </Form>  

        </SignUpContainer>
  )
}

