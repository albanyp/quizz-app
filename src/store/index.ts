import { configureStore } from "@reduxjs/toolkit";
import quizReducer from '../store/quizSlice';
import answerReducer from '../store/answersSlice';

export const store = configureStore({
  reducer: { quiz: quizReducer, answer: answerReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

