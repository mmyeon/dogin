import { configureStore, createSlice } from "@reduxjs/toolkit";

const quiz = createSlice({
  name: "quizReducer",
  initialState: {
    currentQuizNumber: 0,
    userChoiceList: [],
  },
  reducers: {
    updateCurrentQuizNumber: (state, action) => {
      state.currentQuizNumber = action.payload;
    },
    updateUserChoiceList: (state, action) => {
      state.userChoiceList.push(action.payload);
    },
  },
});

const store = configureStore({ reducer: quiz.reducer });

export const { updateCurrentQuizNumber, updateUserChoiceList } = quiz.actions;
export default store;
