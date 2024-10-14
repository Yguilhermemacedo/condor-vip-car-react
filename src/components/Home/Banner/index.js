import './Banner.css';
import BtnAction from '../../Button';

const Banner = () =>{
    return(
        <section className='banner-hero' >
           <div className='text-hero'>
                <h1>Transporte Executivo: conforto, segurança e pontualidade para você.</h1>
                <p>Experimente o melhor do transporte executivo com motoristas profissionais, veículos de luxo e um serviço personalizado. Desfrute de conforto e segurança em cada viagem, seja para compromissos corporativos, turismo ou pessoais.</p>
                <BtnAction value='Agendar reserva' />
           </div>
        </section>
    )
}

export default Banner;