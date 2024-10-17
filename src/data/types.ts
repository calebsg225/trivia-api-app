type TriviaAPIQuestion = {
  "type": "boolean" | "multiple",
  "difficulty": "easy" | "medium" | "hard",
  "category": string,
  "question": string,
  "correct_answer": string,
  "incorrect_answers": string[]
}

type TriviaAPIData = {
  "response_code": number,
  "results": TriviaAPIQuestion[]
}

export { TriviaAPIQuestion, TriviaAPIData }