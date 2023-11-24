import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import '../sass/Nav.scss'

function Nav() {

    

    const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

    const handleLogout = ()=>{
        sessionStorage.removeItem("usuarioLogado")
        window.location ="/login";
    }


    return (
        <>
                <div className="nav">
                    
                        <ul className="navImg">
                            <li><FaUserDoctor /> QuickDoctor</li>
                        </ul>
                        <ul className="navLinks">
                            <li><Link to="/home" ><h4 className="links">Home</h4></Link></li>
                            <li><Link to="/login" ><h4 className="links">Login</h4></Link></li>
                            <li>
                                <div style={userLogado == null ? {display:"none"}: {display:"block"}} className="log">
                                    <p>{userLogado !=null ? `Usuario Logado: ${userLogado.nome} / ${userLogado.email}`:""}</p>
                                    <button onClick={handleLogout} className="logBtn">Logout</button>

                                </div>
                            </li>
                        </ul>

                </div>
        </>
    );
}
export default Nav;