export default function Card({image, name,click}){ 
  return(
    <div onClick={click} className="hover:cursor-pointer flex flex-col items-center justify-center w-40 h-40">
      <img className="w-30 h-30 object-cover rounded-2xl my-1 mx-1" src={image} />
      <p className='text-center'>{name}</p> 
    </div>
  );
}