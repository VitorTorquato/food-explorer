import {Input} from '../../components/input'
import {Button} from '../../components/button'


export function SignUp() {

  return (
    <>
        <h1>Crie Sua Conta</h1>

    <Input
      placeholder='Exemplo: Maria da Silva'
      type="email"
    />
    <Input
      placeholder='Exemplo: exemplo@exemplo.com.br'
      type="email"
    />
    <Input
      placeholder='No mínimo 6 caracteres'
      type="password"
    />
    
    <Button
    
    title='criar conta'
    />
    </>
  )
}

