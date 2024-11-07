import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer } from '../types/quizTypes';

export interface AnswerState {
  selectedAnswer: Record<number, { answerKey: string, isCorrect: string }[]>;
};

const initialState: AnswerState = {
  selectedAnswer: {},
};

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setSelectedAnswer(state, action: PayloadAction<{ questionId: number, answerKey: string, isCorrect: string, isMultiple: string }>) {
      const { questionId, answerKey, isCorrect, isMultiple } = action.payload;
      if (!state.selectedAnswer[questionId]) {
        state.selectedAnswer[questionId] = [];
      }

      if (isMultiple == 'true') {
        state.selectedAnswer[questionId].push({ answerKey, isCorrect });
      } else {
        state.selectedAnswer[questionId] = [{ answerKey, isCorrect }];
      }
    },
  }
})

export const { setSelectedAnswer } = answerSlice.actions;
export default answerSlice.reducer;