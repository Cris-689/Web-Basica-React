import React from 'react';
import Card from 'react-bootstrap/Card';

interface CardData {
  title: string;
  text: string;
  img: string;
}

interface CardItemProps {
  data: CardData;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  return (
    <Card className="card-fixed-width">
      <Card.Img variant="top" src={data.img} className="card-img-square" />
      <Card.Body className="card-body">
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
