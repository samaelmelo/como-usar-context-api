import React from 'react'
import {useCounter} from '../../Context'

export function Espelho() {
  const {number} = useCounter()
  return(
    <div>
      <span>Espelho:{number} </span>
    </div>
  )
}