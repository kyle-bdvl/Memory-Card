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
]


export default function Gameboard({setScore}) {
  const [cards, setCards] = useState([{}]);
  const [clicked, setClicked]= useState([]);
 
  //making the Dummy Cards shuffle in the array haha
  function shuffleCards() {
    const shuffled = [...DUMMY_CARDS].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }
  useEffect(() => {
   shuffleCards();
  }, [])

  function handleClick(index) {
    const clickedCard = cards[index];
    if(clicked.some(card=> card.name === clickedCard.name)) {
      console.log("GameOver! you have clicked on the same card twice")
      setScore(0)
      //to reset the set Clicked Function
      setClicked([]);
    }else{
      setScore((newScore)=>{
        return newScore+1
      });
      setClicked(prev=>[
        ...prev,
        cards[index]
      ])
      console.log(`${index}`)
    }
    shuffleCards();
  }

  //this function is for the game logic 

  return (
    <div>
      <ul className='grid grid-cols-3 py-40 px-20 gap-x-10 justify-items-center'>
        {cards.map((card, index) => (
          <li key={index}>
            <Card image={card.image} name={card.name} click={() => { handleClick(index) }} />
          </li>
        ))}
      </ul>
    </div>
  );
}