import React ,{useContext} from "react"
import Button from 'react-bootstrap/Button'
import {Context as AuthContext} from "../../Context/AuthProvider"


const CerrarSesion = () =>{

    const {signout} = useContext (AuthContext)

    const cerrar = () =>{
        signout()
    }

    return (
        <div className= "">
             <Button variant="outline-dark" onClick={cerrar}>cerrar sesion</Button>
        </div>

    )

}
export default CerrarSesion;