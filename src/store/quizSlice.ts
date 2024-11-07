import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { Question } from '../types/quizTypes';

export interface QuizState {
  questions: Question[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentQuestion: number;
}

interface FetchQuestionsParams {
  limit?: number;
  category?: string;
}

const initialState: QuizState = {
  questions: [],
  status: 'idle',
  error: null,
  currentQuestion: 0,
};

export const fetchQuestions = createAsyncThunk<Question[], FetchQuestionsParams>(
  'quiz/fetchQuestions',
  async ({ limit, category }: FetchQuestionsParams) => {
    console.log('category', category)
    let apiUrl = 'https://quizapi.io/api/v1/questions';
    if (limit) apiUrl += `?limit=${limit}`
    if (category) apiUrl += limit ? `&category=${category}` : `?category=${category}`;

    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': 'f0Ll719miEscmZhYZL6uKmndRNTEbvKLqh4ScTza',
      },
    });

    if (!response.ok) {
      throw new Error('There has been a problem');
    }

    return await response.json();
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion(state) {
      if (state.currentQuestion <= state.questions.length - 1) {
        state.currentQuestion = state.currentQuestion + 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => { state.status = 'loading' })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
        state.status = 'succeeded',
          state.questions = action.payload
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed',
          state.error = action.error.message || 'Question retrieval failed'
      })
  }
})

export const { nextQuestion } = quizSlice.actions;
export default quizSlice.reducer;