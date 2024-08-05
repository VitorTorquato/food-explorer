import { Routes , Route } from 'react-router-dom'


import { Home } from '../pages/Home'
import { Details } from '../pages/details'
import { AddDish } from '../pages/addDish'


export function AdmRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/edit' element={<AddDish/>}/>

        </Routes>
    )
}