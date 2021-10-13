import React from 'react';
import {useCounter} from "../../Context"

export function Button() {
  const { number, setNumber} = useCounter()
  return (
    <div>
      <button onClick={()=> setNumber(number - 5  )}>Subtrair</button>
    </div>
  );
}

