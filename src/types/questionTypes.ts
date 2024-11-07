export interface QuestionTypes {
  questionId: number,
  index?: number;
  questionText: string | null;
  options: Answer
  answers: { [key: string]: string | null },
  handleAnswerSelection: (id: number) => void
  isMultiple: boolean
}

export interface Answer {
  [key: string]: string | null;
  onOptionClick?: any
}