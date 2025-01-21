import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../data";

export type InitialStateType = {
  currentQuizNumber: number;
  userChoiceList: ("YES" | "NO")[];
  quizData: typeof data;
};

const initialState: InitialStateType = {
  currentQuizNumber: 0,
  userChoiceList: [],
  quizData: data,
};

const quiz = createSlice({
  name: "quizReducer",
  initialState,
  reducers: {
    updateCurrentQuizNumber: (state, action) => {
      state.currentQuizNumber = action.payload;
    },
    updateUserChoiceList: (state, action) => {
      state.userChoiceList.push(action.payload);
    },
    resetUserChoiceList: (state) => {
      state.userChoiceList = [];
    },
  },
});

const store = configureStore({ reducer: quiz.reducer });

export const {
  updateCurrentQuizNumber,
  updateUserChoiceList,
  resetUserChoiceList,
} = quiz.actions;
export default store;
