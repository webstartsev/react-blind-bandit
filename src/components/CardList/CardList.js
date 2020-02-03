import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../Carditem/CardItem';

const CardList = ({cards}) => {
  return (
    <div className="CardList">
      {cards.map((card) => <CardItem key={card.id} title={card.title} code={card.code}/>)}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CardList;