import {} from 'react'
import '../sass/Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Home() {
  

  return (
    <>
        <div className='container'>


          <div className='esq'>
            <h2>Bem-vindo à QuickDoctor, onde o futuro da saúde começa hoje.</h2>

            <header>
              <img src="src\Img\home.jpg"  alt="img1" />
            </header>

            <section className='sol'>
              <h1>O Futuro conosco</h1>

              <p>A QuickDoctor surge para superar desafios na saúde, 
                proporcionando acesso rápido e eficiente. Nossa 
                solução inclui uma pré-avaliação inteligente e 
                encaminhamentos precisos, abraçando a revolução 
                da saúde digital. O futuro da saúde começa agora.</p>

                
            </section>

            <button className='infoBtn'>Mais Informações</button>
          </div>

          <div className='dir'>
            <div className='textBox'>
                  <section className='Sobre'>
                    <h1>Sobre a QuickDoctor</h1>

                    <p className='text'>Na QuickDoctor, acreditamos que o acesso à saúde deve ser rápido, 
                      eficiente e personalizado. Nossa missão é transformar a experiência 
                      de cuidados de saúde, tornando-a mais acessível e conveniente para 
                      todos. Combinamos tecnologia inovadora com o compromisso com a 
                      qualidade para criar um serviço único no mercado.</p>
                  </section>

                  <hr/>

                  <section className='visao'>
                    <h1>Nossa Visão</h1>

                    <p className='text'>Imaginamos um mundo onde a preocupação com a saúde não seja uma 
                      barreira para a busca por cuidados especializados. Na QuickDoctor, 
                      vislumbramos um cenário em que cada pessoa possa obter uma avaliação 
                      preliminar de sua condição de saúde de maneira rápida e precisa, e 
                      seja encaminhada para um profissional qualificado de forma eficiente.</p>
                  </section>
                  
                  <hr/>


                  <section className='programa'>
                    <h1>O Programa de Pré-Avaliação</h1>

                    <p className='text'>Nosso diferencial reside em nosso inovador programa de pré-avaliação.
                      Desenvolvemos uma plataforma inteligente que utiliza algoritmos avançados 
                      para analisar informações fornecidas pelos usuários. Esta pré-avaliação 
                      oferece uma visão inicial e precisa sobre a condição de saúde, permitindo 
                      uma triagem eficiente.</p>
                  </section>
            </div>
          </div>
          
          
          
        </div>

        <div className='container2'>

          <h2>Vantagens</h2>

          <div className='vant'>

            <div className="card mb-3 card1" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="src\Img\img3.jpg" className="img-fluid rounded-start" alt="qualificado" />
                </div>
                <div className="col-md-8">
                  <div className="card-body text1">
                    <h5 className="card-title">Encaminhamento para Profissionais Qualificados</h5>
                    <p className="card-text">
                    A QuickDoctor facilita o encaminhamento para profissionais de saúde especializados. Com uma rede de médicos e especialistas altamente qualificados, conectamos os usuários diretamente aos profissionais mais adequados para suas necessidades específicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 card2" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="src\Img\img4.jpg" className="img-fluid rounded-start" alt="qualificado" />
                </div>
                <div className="col-md-8">
                  <div className="card-body text2">
                    <h5 className="card-title">Compromisso com a Privacidade e Segurança</h5>
                    <p className="card-text">
                    Na QuickDoctor, priorizamos a privacidade e a segurança dos dados dos usuários. Utilizamos as mais recentes práticas de segurança cibernética para garantir que as informações pessoais estejam protegidas em todos os momentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 card3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="src\Img\img5.png" className="img-fluid rounded-start" alt="qualificado" />
                </div>
                <div className="col-md-8">
                  <div className="card-body text3">
                    <h5 className="card-title">Junte-se a Nós na Revolução da Saúde Digital</h5>
                    <p className="card-text">
                    Estamos entusiasmados em liderar a revolução da saúde digital e convidamos você a se juntar a nós nessa jornada. Na QuickDoctor, acreditamos que todos merecem cuidados de saúde de qualidade e estamos comprometidos em tornar isso uma realidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>


    </>
  )
}

export default Home