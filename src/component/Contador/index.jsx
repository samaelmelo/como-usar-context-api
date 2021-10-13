import React from 'react'
import {useCounter} from "../../Context"


export function Contador() {
  const {number } = useCounter()

  return(
    <div>
      <span>Contador:{number} </span>
    </div>
  )
}