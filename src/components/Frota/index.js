import './Frota.css';
import { useState, useEffect } from 'react';

const Frota = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const vehicles = [
    {
      type: 'Sedan Executivo',
      name: 'Toyota Corolla',
      description: 'Luxo e conforto para executivos.',
      img: '/img/preto-eclipse.png',
    },
    {
      type: 'SUV',
      name: 'Tiggo 8',
      description: 'SUV espaçoso e potente para qualquer viagem.',
      img: '/img/tiggo-8.png',
    },
    {
      type: 'Minivan',
      name: 'Fiat Scudo',
      description: 'Ideal para famílias, com bastante espaço.',
      img: '/img/fiat-van.png',
    },
    {
      type: 'Van',
      name: 'Mercedes-Benz Sprinter',
      description: 'Veículo perfeito para grupos maiores.',
      img: '/img/sprinter.png',
    },
  ];

  // Rotação automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % vehicles.length);
    }, 4000); // desliza a cada 3 segundos
    return () => clearInterval(interval);
  }, [vehicles.length]);

  return (
    <div className="frota-container">
     
      <div className="slider">
        <h2>Nossa Frota</h2>
        {vehicles.map((vehicle, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <div className="content-slide">
              <img src={vehicle.img} alt={vehicle.name} className="img-slide" />
              <div className="descricao-veiculo">
                <h3>{vehicle.type}</h3>
                <h4>{vehicle.name}</h4>
                <p>{vehicle.description}</p>
                <a href="#">
                  <button className='btn-reserva'>Reservar</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frota;
