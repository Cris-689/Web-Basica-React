import React from 'react';
import Header from './components/Header/Header';
import CardsSection from './components/CardsSection/CardsSection';
import Aside from './components/Aside/Aside';

import card1Img from './assets/images/card1.jpg';
import card2Img from './assets/images/card2.jpg';
import card3Img from './assets/images/card3.png';

import './App.css';

function App() {
  const cardsData = [
    { title: 'Card 1', text: 'Desasdcripción de la card 1.', img: card1Img },
    { title: 'Card 2', text: 'Descripción de la card 2.', img: card2Img },
    { title: 'Card 3', text: 'Descripción de la card 3.', img: card3Img },
  ];

  return (
    <div className="app-container">
      <Header />

      {/* Layout de dos columnas */}
      <div className="main-layout">
        <div className="content-column">
          <CardsSection cards={cardsData} />
        </div>

        <aside className="aside-column">
          <Aside />
        </aside>
      </div>
    </div>
  );
}

export default App;
