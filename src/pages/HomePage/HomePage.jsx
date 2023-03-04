import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import TrustInUs from '../../components/TrustInUs/TrustInUs';


import "./HomePage.css";


function HomePage() {
  const [images, setImages] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];


  useEffect(() => {
    setImages(
      [
        'https://triton.com.pe/wp-content/uploads/2019/08/triton-tipos-maquinaria-pesada-comunes.jpg',
        'https://triton.com.pe/wp-content/uploads/2019/08/triton-tipos-maquinaria-pesada-comunes.jpg',
        'https://triton.com.pe/wp-content/uploads/2019/08/triton-tipos-maquinaria-pesada-comunes.jpg',
        'https://triton.com.pe/wp-content/uploads/2019/08/triton-tipos-maquinaria-pesada-comunes.jpg',
        'https://triton.com.pe/wp-content/uploads/2019/08/triton-tipos-maquinaria-pesada-comunes.jpg',
        'https://triton.com.pe/wp-content/uploads/2019/08/triton-tipos-maquinaria-pesada-comunes.jpg',
      ]);
  }, []);

  const imageTemplate = (image) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img src={`${image}`} className="w-6 shadow-2" />
        </div>
      </div>
    );
  };

  return (
    <div className='HomePage'>
      <Jumbotron />
      <TrustInUs />
      <div className="card">
        <h1 className='mt-5'>Productos destacados</h1>
        <Carousel value={images} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={imageTemplate} />
      </div>

    </div>
  );
}

export default HomePage;
