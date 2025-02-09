"use client"

import { useState } from "react"
import { calculateExpression } from "../utils/calculateExpression"
import Joke from "./joke"

export default function Calculator() {
  const [display, setDisplay] = useState("")
  const [showJoke, setShowJoke] = useState(false)

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const result = calculateExpression(display)
        setDisplay(result.toString())
        setShowJoke(true)
      } catch (error) {
        setDisplay("Error")
      }
    } else if (value === "C") {
      setDisplay("")
    } else {
      setDisplay(display + value)
    }
  }

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "C",
    "4",
    "5",
    "6",
    "*",
    "(",
    "1",
    "2",
    "3",
    "-",
    ")",
    "0",
    ".",
    "^",
    "+",
    "=",
    "sin",
    "cos",
    "tan",
    "log",
    "sqrt",
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <input 
  type="text" 
  value={display} 
  className="w-full mb-4 p-2 text-right text-xl border rounded bg-black text-white" 
  readOnly 
/>

      <div className="grid grid-cols-5 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            {btn}
          </button>
        ))}
      </div>
      {showJoke && <Joke onJokeDisplayed={() => setShowJoke(false)} />}
    </div>
  )
}

