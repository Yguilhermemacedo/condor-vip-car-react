import './Servicos.css';

const Servicos = () =>{
    return(
        <section id='servicos' >
            <h2>Nossos serviços</h2>
            <div className='container-servicos'>
                <div className='card-servicos'>
                   <img src='/img/icone-translado.png' alt='Ícone de translado' className='icone-translado' />
                    <h3>Translado</h3>
                        <p>O serviço de translado da Condor Vip Car oferece transporte eficiente e confortável entre aeroportos, hotéis e eventos. Com motoristas experientes e veículos modernos, garantimos pontualidade e segurança em cada trajeto.</p>
                </div>
                <div className='card-servicos'>
                    <img src='/img/icone-viagem.png' alt='Ícone de viagem' className='icone-viagem' />
                    <h3>Viagens</h3>
                        <p>O serviço de viagens da Condor Vip Car garante transporte seguro e confortável em veículos modernos, com motoristas bilíngues. Ideal para negócios ou turismo, oferecemos um serviço personalizado para atender suas necessidades.</p>
                </div>
                <div className='card-servicos'>
                    <img src='/img/icone-aeroporto.png' alt='Ícone de receptivos em aeroportos' className='icone-receptivos' />
                    <h3>Receptivos em Aeroportos</h3>
                        <p>Em receptivos de aeroportos  te oferecemos um  transporte premium com veículos modernos e motoristas bilíngues. Desfrute de um deslocamento seguro e confortável adaptado às suas necessidades!</p>
                </div>
                <div className='card-servicos'>
                    <img src='/img/icone-aereo.png' alt='ícone de Transportes aéreos' className='icone-aereo' />
                    <h3>Transporte Aéreo</h3>
                        <p>O serviço de transporte aéreo da Condor Vip Car proporciona rapidez e exclusividade, com parcerias que incluem helicópteros para deslocamentos ágeis e seguros. Ideal para quem busca otimizar tempo e viajar com conforto, garantindo um serviço de excelência.</p>
                </div>
            </div>
        </section>
    )
}

export default Servicos;