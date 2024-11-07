export interface Answer {
  [key: string]: string | null;
}

export interface CorrectAnswer {
  [key: string]: 'true' | 'false';
}

export interface Question {
  id: number;
  question: string;
  answers: Answer;
  correct_answers: CorrectAnswer;
  multiple_correct_answers: boolean;
}


