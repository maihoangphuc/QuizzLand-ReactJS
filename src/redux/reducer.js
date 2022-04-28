import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionAndAnswer: [],
    score: 0,
    topic: ""
}

export const quizzLandSlice = createSlice({
    name: "quizzland",
    initialState,
    reducers: {
        quizzLandData: (state, action) => {
            state.questionAndAnswer = action.payload
        },
        totalScore: (state, action) => {
            state.score = action.payload
        },
        topic: (state, action) => {
            state.topic = action.payload;
        }
    }
})
export const {
    actions: { quizzLandData, totalScore, topic },
    reducer
} = quizzLandSlice