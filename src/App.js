import React from 'react';
import CardList from './components/CardList/CardList';
import Statistics from './components/Statistics/Statistics';
import {SHOW_CARDS, INITIAL_CARD} from './const';
console.log('INITIAL_CARD: ', INITIAL_CARD);

let cardsInGame = [];

const App = () => {
  const [statistics, setStatistics] = React.useState({
    countMoves: 0,
    countPoints: 0,
    cardsInPull: 21
  });
  const [start, setStart] = React.useState(false);
  const [finish, setFinish] = React.useState(false);
  const [allCards, setAllCards] = React.useState([]);

  const shuffledCards = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  
  const getThreeCards = (cards) => {
    return cards.slice(0, SHOW_CARDS);
  };

  const updateCards = () => {
    setAllCards([...shuffledCards(allCards)]);
    console.log('allCards: ', allCards);
    cardsInGame = getThreeCards(allCards);
    const resultRound = checkCards(cardsInGame);
    updateStatistics(resultRound);

    if (!allCards.length) {
      setStart(false);
      setFinish(true);
    }
  };

  const updateStatistics = (resultRound) => {
    const round = ++statistics.countMoves;
    const ponts = resultRound ? ++statistics.countPoints : statistics.countPoints;
    const cardsInPull = allCards.length;

    setStatistics({
      countMoves: round,
      countPoints: ponts,
      cardsInPull: cardsInPull
    });
  };

  const startGame = () => {
    setStart(true);
    setAllCards([...INITIAL_CARD]);
    updateCards();
  };

  const checkCards = (cards) => {
    let uniqueCodes = [];
    let unique = [];

    cards.forEach((card) => {
      if (uniqueCodes.indexOf(card.code) === -1) {
        uniqueCodes.push(card.code);
        unique.push(card);
      }
    });

    if (uniqueCodes.length === 3) {
      setAllCards(allCards.filter((card) => unique.indexOf(card) === -1));
      return true;
    }
    return false;
  };

  return (
    <div className="wrapper">
      <h1>Blind Bandit</h1>

      {start ? (
        <React.Fragment>
          <Statistics statistics={statistics}/>
          <CardList cards={cardsInGame}/>
          <button onClick={updateCards}>Обновить</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button onClick={startGame}>Начать игру</button>
        </React.Fragment>
      )}

      {finish && <p>Поздраляю</p>}
    </div>
  );
}

export default App;
