import { createPortal } from "react-dom"
export default function Modal(){
  const [gameState, setGameState] = useState(false);

  
  return createPortal(
    <dialog >
      <p>{gameState ? 'you have lost' :null }</p>
      <button>
        Play Again!
      </button>
    </dialog>
  ),document.getElementById('modal');
}