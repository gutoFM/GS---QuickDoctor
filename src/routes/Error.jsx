import {} from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import '../sass/Error.scss'
import { Link } from 'react-router-dom';


function Erro() {
  

  return (
    <>
        
        <div className='error'>

          <p>QuickDoctor</p>

          <div className='contError'>
            <h1><FaUserDoctor /> QuickDoctor</h1>
            <p>Error</p>

            <li><Link to="/home" ><h4 className="home">Voltar à pagina principal</h4></Link></li>
          </div>

        </div>

    </>
  )
}

export default Erro