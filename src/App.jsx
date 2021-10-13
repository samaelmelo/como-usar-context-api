import React from 'react';
import { Contador } from './component/Contador';
import { Espelho } from './component/Espelho';
import { CounterProvider} from './Context';
import { Button } from "./component/Button"


export function App(){
 

  return(
      <CounterProvider>
          <Contador/>
          <hr />
          <Espelho/>
          <Button />
      </CounterProvider>
  )
}

