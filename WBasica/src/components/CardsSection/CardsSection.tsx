import React from 'react';
import './CardsSection.css';
import CardItem from './CardItem';

interface CardData {
  title: string;
  text: string;
  img: string;
}

interface CardsSectionProps {
  cards: CardData[];
}

import andalucia1 from '../../assets/images/andalucia/andalucia1.jpg';
import andalucia2 from '../../assets/images/andalucia/andalucia2.jpg';
import andalucia3 from '../../assets/images/andalucia/andalucia3.jpg';

const galleryImages = [andalucia1, andalucia2, andalucia3];

const CardsSection: React.FC<CardsSectionProps> = ({ cards }) => {
  return (
    <div className="cards-section">
      {/* Cards */}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <CardItem key={index} data={card} />
        ))}
      </div>

      {/* Galería */}
      <h3 className="gallery-title">Galería de Andalucía</h3>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Andalucía ${index + 1}`}
            className="gallery-img-square"
          />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
