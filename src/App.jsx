import Header from './components/Header'
import Score from './components/Score'
import Gameboard from './components/Gameboard';
import {useState} from 'react';
function App() {
  const [score, setScore]=useState(0);
  const [highScore,setHighScore]= useState(0);


  if (score > highScore){
    let newScore = score;
    setHighScore(newScore);
  }


  return (
    <>
    <div className="flex flex-col items-center">
      <Header/>
      <Score score={score} highScore={highScore}/>
      <Gameboard setScore={setScore} />
    </div>
     
    </>
  )
}

export default App
