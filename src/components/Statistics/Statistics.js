import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({statistics}) => {
  const {countMoves, countPoints, cardsInPull} = statistics;
  return (
    <div className="Statistics">
      <p>Кол-во ходов: {countMoves}</p>
      <p>Кол-во очков: {countPoints}</p>
      <p>Карт в пуле: {cardsInPull}</p>
    </div>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.exact({
    countMoves: PropTypes.number,
    countPoints: PropTypes.number,
    cardsInPull: PropTypes.number
  })
};

export default Statistics;