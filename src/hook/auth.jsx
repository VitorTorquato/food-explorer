import { createContext, useContext ,useState , useEffect} from "react";

import {api} from '../service/api'

const AuthContext = createContext({});

function AuthProvider({children}){

    const [data, setData] = useState({});

    async function signIn({email,password}){
        try{
            

            const response = await api.post('sessions', {email , password});
            const {user , token} =  response.data;

            localStorage.setItem('@foodExplorer:user' , JSON.stringify(user))
            localStorage.setItem('@foodExplorer:token' , token)
           
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          


            setData({user,token})

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Nao foi possivel entrar')
            }
        }
    }


    function signOut(){
        localStorage.removeItem('@foodExplorer:user');
        localStorage.removeItem('@foodExplorer:token');

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem('@foodExplorer:user')
        const token = localStorage.getItem('@foodExplorer:user')
    
    
        if(user && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                user : JSON.parse(user),
                token
            })
        }
    
    
        } , [])


    return (
        <AuthContext.Provider
        value={
            {
                signIn,
                signOut,
                user: data.user
            }
        }
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {useAuth , AuthProvider}