import React, { useState } from 'react';
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  return (
    <div>
      <h1>TIC-TAC-TOE</h1>
      <div className = "row1">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className = "row2">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className = "row3">
        <Square/>
        <Square/>
        <Square/>
      </div>
       
    </div>
  )
}
