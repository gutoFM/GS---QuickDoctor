import {} from 'react'
import '../sass/Footer.scss'
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/Ai';


function Footer() {
  

  return (
    <>
        <div className='geral'>

          <div className='container'>
            
            <div className='footerEsq'>
              <h1><FaUserDoctor /> QuickDoctor</h1>
              <p>Onde o futuro da saúde começa hoje.</p>
            </div>

            <div className='footerMei'>
              <p>@2023 - Direitos reservados a QuickDoctor</p>
            </div>

            <div className='footerDir'>
              <h1>Links</h1>
              <a href="https://www.instagram.com/"><AiOutlineInstagram/> Instagram</a>
              <a href="https://www.facebook.com/?locale=pt_BR"><AiFillFacebook/> Facebook</a>
              <a href="https://www.linkedin.com/"><AiFillLinkedin/> Linkedin</a>
              <a href="https://www.google.com/intl/pt-BR/gmail/about/"><AiOutlineMail/> Email</a>
            </div>

          </div>

        </div>
    </>
  )
}

export default Footer