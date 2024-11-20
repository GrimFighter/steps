import { useState } from "react";
export default function App ()
{
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [ count, setCount ] = useState( 0 );
  const [ message, setMessage ] = useState( messages[ count ] );


  function next ()
  {
    if ( count < 2 )
    {
      setCount( prev=>prev+1 );
      setMessage( messages[ count ] );
    } 


  }

  function prev ()
  {
    if ( count > 0 )
    {
      setCount( prev=>prev-1 );
      setMessage( messages[ count ] );
    } 
  }


  return (
    <div className="steps">
      <div className="numbers">
        <div className={ count >= 0 ? 'active' : '' }>1</div>
        <div className={ count >= 1 ? 'active' : '' }>2</div>
        <div className={ count == 2 ? 'active' : '' }>3</div>
      </div>
      <p className="message">{ messages[count] }</p>
      <div className="buttons">
        <button style={ { backgroundColor: '#7950f2', color: 'white' } } onClick={ prev }>Previous</button>
        <button style={ { backgroundColor: '#7950f2', color: 'white' } } onClick={ next }>Next</button> </div>
    </div>

  );
}
