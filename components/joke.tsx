"use client"

import { useState, useEffect } from "react"

interface JokeProps {
  onJokeDisplayed: () => void
}

export default function Joke({ onJokeDisplayed }: JokeProps) {
  const [joke, setJoke] = useState({ setup: "", punchline: "" })
  const [showPunchline, setShowPunchline] = useState(false)

  useEffect(() => {
    fetch("/api/jokes")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data)
        setShowPunchline(false)
      })
  }, [])

  const handlePunchlineClick = () => {
    setShowPunchline(true)
    setTimeout(() => {
      onJokeDisplayed()
    }, 3000)
  }

  return (
    <div className="mt-4 p-4 bg-black rounded">
      <p className="font-semibold text-yellow-300">{joke.setup}</p>
      {!showPunchline ? (
        <button
          onClick={handlePunchlineClick}
          className="mt-2 bg-yellow-500 text-black p-2 rounded hover:bg-yellow-400 transition-colors"
        >
          Show Punchline
        </button>
      ) : (
        <p className="mt-2 italic text-green-300">{joke.punchline}</p>
      )}
    </div>
  )
}
