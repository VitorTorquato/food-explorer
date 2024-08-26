import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdmRoutes } from "./adm.routes";
import { UserRoutes } from "./user.routes";

import {USER_ROLE} from '../utils/roles';

import {useAuth} from '../hook/auth';

export function Routes(){

    const {user} = useAuth();

    function AccessRoutes(){
        switch(user.role){
            case USER_ROLE.ADMIN:
                return <AdmRoutes/>;
            case USER_ROLE.CUSTOMER:
                return <UserRoutes/>;
            default:
                return <AppRoutes/>;

        }
    }

    return(
        <BrowserRouter>
           {user ? <AccessRoutes/> : <AuthRoutes/>}   
        </BrowserRouter>
    )

}