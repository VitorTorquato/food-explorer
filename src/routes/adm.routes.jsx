import { Routes , Route } from 'react-router-dom'


import { Home } from '../pages/Home'
import { Details } from '../pages/details'
import { AddDish } from '../pages/addDish'
import { EditDish } from '../pages/editDish'


export function AdmRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detalhes' element={<Details/>}/>
            <Route path='/adicionar' element={<AddDish/>}/>
            <Route path='/editar' element={<EditDish/>}/>

        </Routes>
    )
}