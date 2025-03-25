import { useEffect, useState } from 'react';
import Doge from '../images/dogeCoin.png'
import Doink from '../images/doink.jpeg';
import pepeCoin from '../images/pepeCoin.png'
import Card from './Card'

const DUMMY_CARDS = [
  { name: 'Dummy1', image: Doge },
  { name: 'Dummy2', image: pepeCoin },
  { name: 'Dummy3', image: Doink },
  { name: 'Dummy4', image: Doge },
  { name: 'Dummy5', image: Doge },
  { name: 'Dummy6', image: pepeCoin },
  { name: 'Dummy7', image: Doink },
  { name: 'Dummy8', image: Doink },
  { name: 'Dummy9', image: pepeCoin },
  { name: 'Dummy10', image: Doink },
  // { name: 'Dummy11', image: pepeCoin },
  // { name: 'Dummy12', image: Doink },
  // { name: 'Dummy13', image: Doink },
  // { name: 'Dummy14', image: pepeCoin },
  // { name: 'Dummy15', image: Doink },
  // { name: 'Dummy16', image: Doink },
  // { name: 'Dummy17', image: Doink },
  // { name: 'Dummy18', image: pepeCoin },
  // { name: 'Dummy19', image: Doink },
  // { name: 'Dummy20', image: pepeCoin },
  // { name: 'Dummy21', image: Doink },
  // { name: 'Dummy22', image: Doink },
  // { name: 'Dummy23', image: pepeCoin },
  // { name: 'Dummy24', image: Doink },
]


export default function Gameboard({ setScore, setGameOver }) {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [round, setRound] = useState(0);
  //making the Dummy Cards shuffle in the array haha
  function shuffleCards() {
    const shuffled = [...DUMMY_CARDS].sort(() => Math.random() - 0.5);
    const unique = uniqueCard();
    shuffled.fill(unique, 0, 1);
    setCards(shuffled);
    console.log(unique);

  }
  useEffect(() => {
    shuffleCards();
  }, [])

  function handleClick(index) {
    const clickedCard = cards[index];
    if (clicked.some(card => card.name === clickedCard.name)) {
      console.log("GameOver! you have clicked on the same card twice")
      setScore(0)
      setRound(0)
      setGameOver(true);
      //to reset the set Clicked Function
      setClicked([]);
    }
    else if (DUMMY_CARDS.length - 1 === round) {
      console.log('you win')
      setRound(0);
    }

    else {

      setScore((newScore) => {
        return newScore + 1
      });
      setClicked(prev => [
        ...prev,
        cards[index]
      ])
      setRound((newRound) => {
        return newRound + 1
      });
      // console.log(`${index}`)
    }
    shuffleCards();
  }

  //generate one unique card
  function uniqueCard() {
    const unusedCards = DUMMY_CARDS.filter(card =>
      !clicked.some(clickedCard => clickedCard.name === card.name))

    console.log(unusedCards)
    if (unusedCards.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * unusedCards.length);

    return unusedCards[randomIndex];

  }
  //to test git

  return (
    <div>
      <ul className='grid grid-cols-3 py-40 px-20 gap-x-10 justify-items-center'>
        {cards.map((card, index) => {
          if (index < 3) {
            return (<li key={index}>
              <Card image={card.image} name={card.name} click={() => { handleClick(index) }} />
            </li>
            )
          }
        }
        )
        }
      </ul>
    </div>
  );
}