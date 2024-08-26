import { Routes , Route } from 'react-router-dom'


import { Home } from '../pages/Home'
import { Details } from '../pages/details'
import { AddDish } from '../pages/addDish'
import { EditDish } from '../pages/editDish'


export function AppRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/add' element={<AddDish/>}/>
            <Route path='/edit' element={<EditDish/>}/>

        </Routes>
    )
}