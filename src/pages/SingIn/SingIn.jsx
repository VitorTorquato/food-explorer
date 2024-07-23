import {Input} from '../../components/input'
import {Button} from '../../components/button'

import { FiMail , FiLock} from 'react-icons/fi'

export function SignIn() {

  return (
    <>

    <h1>Faça Login</h1>

    <Input
      placeholder='Exemplo: exemplo@exemplo.com.br '
      type="email"
    />
    <Input
      placeholder='No mínimo 6 caracteres'
      type="password"
    />
    
    <Button
    
    title='Entrar'
    />
    </>
  )
}

