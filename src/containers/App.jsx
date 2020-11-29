import React from 'react';
//importación de componentes
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
//importación de estilos de los componentes
import '../assets/styles/App.scss';
//importación de hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';
const App = () => {
  const initalState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          {initalState.peliculas.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Series'>
        <Carousel>
          {initalState.series.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Partidos Inolvidables Barça'>
        <Carousel>
          {initalState.deporte.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
