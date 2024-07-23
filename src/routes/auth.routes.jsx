import { Routes , Route } from 'react-router-dom'


import { SignIn } from '../pages/SingIn/SingIn'
import { SignUp } from '../pages/SingUp/SingnUp'

export function AuthRoutes(){

    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='register' element={<SignUp/>}/>

        </Routes>
    )
}