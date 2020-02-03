import React from 'react';
import CardList from './components/CardList/CardList';

const SHOW_CARDS = 3;

const App = () => {
  const [cards, setCards] = React.useState([
    {id: 1, title: `Валет`, code: `Valet`},
    {id: 2, title: `Валет`, code: `Valet`},
    {id: 3, title: `Валет`, code: `Valet`},
    {id: 4, title: `Дама`, code: `Dama`},
    {id: 5, title: `Дама`, code: `Dama`},
    {id: 6, title: `Дама`, code: `Dama`},
    {id: 7, title: `Король`, code: `Korol`},
    {id: 8, title: `Король`, code: `Korol`},
    {id: 9, title: `Король`, code: `Korol`},
    {id: 10, title: `Туз`, code: `Tyz`},
    {id: 11, title: `Туз`, code: `Tyz`},
    {id: 12, title: `Туз`, code: `Tyz`}
  ]);

  const shuffledCards = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  
  const getThreeCards = (cards) => {
    return cards.slice(0, SHOW_CARDS);
  };

  const updateCards = () => {
    setCards([...shuffledCards(cards)]);
  };

  return (
    <div className="wrapper">
      <h1>Blind Bandit</h1>

      <CardList cards={getThreeCards(cards)}/>
      <button onClick={updateCards}>Обновить!</button>
    </div>
  );
}

export default App;
