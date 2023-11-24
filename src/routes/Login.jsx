import {useState} from 'react'
import '../sass/Login.scss'



function Login() {

    
    const [usuario, setUsuario]= useState({
        email:"",
        senha:"",
    })

    

    const handleChange = async (e)=>{
    const {name, value}=e.target;
    setUsuario({...usuario,[name]:value})
    } 

    

    const handleSubmit =async (e)=>{
        e.preventDefault();


        let user;

        try{
            const response = await fetch(" http://localhost:5000/usuarios");
            if(response.ok){
                const users = await response.json();

                for (let i=0; i < users.length;i++){
                    const use =users[i];
                    user = use;

                    if(use.email==usuario.email  && use.senha == usuario.senha){
                        user =use;
                        break;
                    }
                 
                }
            }
            if(user.email==usuario.email  && user.senha == usuario.senha){
                
                sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
                

                setTimeout(()=>{
                    window.location='/';
                },3000)
            }else{
                alert("Email/senha Invalidos")
                    setUsuario({
                        email:"",
                        senha:"",
                    })
                    window.location ="/login";
                }
            }
        catch(error){
            console.log(error)
        }
    }


  return (
    <>
        
            <div className='containerLog'>

                <div className="card mb-3 login" style={{}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src="src\Img\login.jpg" className="img-fluid rounded-start" alt="login" />
                        </div>
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit} className='formLog'>
                                <div className='email'>
                                    <label htmlFor='idEmail'>Email:</label>
                                    <input
                                    type="text"
                                    name="email"
                                    value={usuario.email}
                                    placeholder="Digite seu email"
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className='senha'>
                                    <label htmlFor='idSenha'>Senha:</label>
                                    
                                    <input
                                    type="password"
                                    name="senha"
                                    value={usuario.senha}
                                    placeholder= "Digite sua senha"
                                    onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className='logBtn'>Login</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


  
    </>
  )
}

export default Login