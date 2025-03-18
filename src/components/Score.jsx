export default function Score({score, highScore}) {

  
  return (
    <>
      <div className="flex flex-row gap-23">
        <p>HighScore : {highScore}</p>
        <p>Score :{score}</p>

      </div>

    </>
  );
}