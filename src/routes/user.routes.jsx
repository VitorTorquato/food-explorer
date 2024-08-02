import { Routes , Route } from 'react-router-dom'


import { Home } from '../pages/Home'
import { Details } from '../pages/details'


export function UserRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>

        </Routes>
    )
}