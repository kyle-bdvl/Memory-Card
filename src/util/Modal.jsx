import { createPortal } from "react-dom"
export default function Modal(){
  const [gameState, setGameState] = useState(false);


  return(
    <dialog>
      <p>{gameState ? 'you have lost' :null }</p>
    </dialog>
  ),createPortal.elementbyId('modal');
}