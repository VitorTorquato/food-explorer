import { FiSearch  } from "react-icons/fi";


import { Header } from "../../components/header"


export function Home(){
    return(
        <Header>
            <div className="iconSearch">


            <FiSearch/>
            </div>
            <input type="text"
                placeholder="Busque por pratos ou ingredientes"
            />
        </Header>
    )

}