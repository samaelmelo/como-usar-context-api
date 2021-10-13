import React, {useContext, useState, createContext} from 'react'

const counterContext = createContext()

export function CounterProvider({children}){
  const [number, setNumber] = useState(100)

  return(
    <counterContext.Provider value={{number, setNumber}}>
        {children}
    </counterContext.Provider>
  )
}

export function useCounter(){
  const context = useContext(counterContext)

  const { number, setNumber } = context
  
  return{ number, setNumber }
}