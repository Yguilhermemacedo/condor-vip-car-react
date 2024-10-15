import './Sobre.css';

const Sobre = () =>{
    return(
        <section>
            <div className='content-sobre'>
                <h2>Quem somos</h2>
                <p>A Condor Vip Car é uma empresa consolidada no mercado há mais de 40 anos, oferecendo serviços de transporte executivo e turismo de alto padrão. Atendemos tanto o setor corporativo quanto o turístico, com uma frota moderna que inclui veículos convencionais e blindados, operados por motoristas bilíngues altamente qualificados em direção preventiva. Disponibilizamos nossos serviços 24 horas por dia, com opções que vão desde sedans de luxo, vans, mini vans e micro-ônibus, até ônibus completos para grandes grupos. Além disso, contamos com parcerias estratégicas para oferecer transporte de helicóptero e serviços de guias de turismo.
                </p>
                <p>Atendemos as regiões metropolitanas do Rio de Janeiro e São Paulo, garantindo conforto e segurança para nossos clientes, que incluem grandes empresas, consulados e setores governamentais. Com uma carteira de clientes diversificada e um compromisso inabalável com a excelência, facilitamos viagens de negócios e turismo para visitantes nacionais e internacionais, sempre assegurando uma experiência de primeira classe.</p>
                <a href='#'>
                    <button className='btn-contato' >Entrar em contato <i class='bx bxl-whatsapp'></i></button>
                </a>
            </div>
            <img src='/img/banner-sobre.jpg' alt='' />
        </section>
    )
}


export default Sobre;
