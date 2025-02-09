import * as math from "mathjs"

export function calculateExpression(expression: string): number {
  try {
    return math.evaluate(expression)
  } catch (error) {
    throw new Error("Invalid expression")
  }
}

