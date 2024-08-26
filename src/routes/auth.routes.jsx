import { Routes , Route , Navigate} from 'react-router-dom'


import { SignIn } from '../pages/SingIn/SingIn'
import { SignUp } from '../pages/SingUp/SingnUp'

export function AuthRoutes(){

    const user = localStorage.getItem('@foodExplorer:user')

    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='register' element={<SignUp/>}/>

            {!user && <Route path='*' element={<Navigate to="/"/>}/>}
        </Routes>
    )
}