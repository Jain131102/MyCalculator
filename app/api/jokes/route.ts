import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const joke = await response.json()
    return NextResponse.json(joke)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch joke" }, { status: 500 })
  }
}

